import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  json,
} from "@remix-run/node";
import ContactMe from "~/features/homepage/components/ContactMe";
import Hero from "~/features/homepage/components/Hero";
import TechStack from "~/features/homepage/components/TechStack";
import Sendgrid from "@sendgrid/mail";
import { meta as rootMeta } from "../root";

type ActionData = {
  name: null | string;
  email: null | string;
  message: null | string;
};

type Success = {
  successMessage: string;
};

type Error = {
  errorMessage: string;
};

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
    to: "luka.web.php@gmail.com",
    from: "luka.web.php@gmail.com",
    subject: "Mail sa lukalazic.com sajta od " + email?.toString(),
    text: message?.toString(),
    html: message?.toString() || "",
  };

  const res = await Sendgrid.send(msg)
    .then(() => {
      return json<Success>({
        successMessage: "Email sent succesfully. Hvala!",
      });
    })
    .catch((error) => {
      // TODO: Maybe there can be multiple errors in a single response, to be investigated
      return json<Error>({
        errorMessage: error.response.body.errors[0].message,
      });
    });

  return res;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { origin } = new URL(request.url);

  const ogImageUrl = `${origin}/resource/ogimage?ogimage=Luka Lazić Blog`;

  return json({ ogImageUrl });
};

export const meta: MetaFunction = ({ data }) => {
  return {
    ...rootMeta,
    "og:image": data.ogImageUrl,
  };
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
