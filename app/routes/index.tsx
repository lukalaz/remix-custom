import { ActionFunction, json } from "@remix-run/node";
import Sendgrid from "@sendgrid/mail";
import { Homepage } from "~/features/homepage/Homepage";

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
  return <Homepage />;
};

export default Index;
