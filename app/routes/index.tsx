import { ActionFunction, json } from "@remix-run/node";
import ContactMe from "~/features/homepage/components/ContactMe";
import Hero from "~/features/homepage/components/Hero";
import TechStack from "~/features/homepage/components/TechStack";
import Sendgrid from "@sendgrid/mail";

type ActionData =
  | {
      name: null | string;
      email: null | string;
      message: null | string;
    }
  | undefined;

type Success =
  | {
      successMessage: string;
    }
  | undefined;

type Error =
  | {
      errorMessage: string;
    }
  | undefined;

export async function loader() {
  return json({
    ENV: {
      DATABASE_URL: process.env.DATABASE_URL,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    },
  });
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const sgapikey = formData.get("sgapikey");

  const errors: ActionData = {
    name: name ? null : "Name is required",
    email: email ? null : "Email is required",
    message: message ? null : "Message is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  Sendgrid.setApiKey(sgapikey?.toString() || "");
  // This might not be the best way to handle this api key
  // but since it's a free Sendgrid account for my personal website
  // I didn't want to waste too much time on this. If you read this
  // and have a better idea on how to handle it, please do let me know :)
  // Also, if someone actually reads this know that I really appreciate you!
  // Mention this to me at any time and I WILL buy you a beer

  const msg = {
    to: "luka.web.php@gmail.com", // Change to your recipient
    from: "luka.web.php@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const res = await Sendgrid.send(msg)
    .then(() => {
      console.log("poslasmo");

      return json<Success>({
        successMessage: "Email sent succesfully. Hvala!",
      });
    })
    .catch((error) => {
      return json<Error>({
        errorMessage: `The email failed to send. We're sorry! Message: ${error}`,
      });
    });

  return res;
};

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <ContactMe />
    </>
  );
};

export default Index;
