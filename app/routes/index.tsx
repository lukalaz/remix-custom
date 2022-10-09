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

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const errors: ActionData = {
    name: name ? null : "Name is required",
    email: email ? null : "Email is required",
    message: message ? null : "Message is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  Sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
  console.log(process.env.SENDGRID_API_KEY, "apibroj");

  const msg = {
    to: "luka.web.php@gmail.com", // Change to your recipient
    from: "luka.web.php@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  await Sendgrid.send(msg)
    .then(() => {
      console.log("poslasmo");

      return json<Success>({
        successMessage: "Email sent succesfully. Hvala!",
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return json<Success>({ successMessage: "WAHUUU" });
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
