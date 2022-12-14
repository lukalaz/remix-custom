import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import StyledTitle from "~/common/components/StyledTitle";
import SuccessMessage from "~/common/components/SuccessMessage";
import {
  animationDelay,
  fadeInAnimation,
  randomShortInterval,
  snapFromBottomAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "~/common/utils/AnimationVariants";

const ContactMe: React.FC = () => {
  const response = useActionData();
  const data = useLoaderData();

  return (
    <section id="contact" className="pt-[120px] overflow-x-hidden">
      <div className="container">
        <StyledTitle
          title="Got something for me?"
          preTitle="Contact Me"
          description="In case you have some questions or just want to say hi, this is a good place to do so. Just need to make it functional first :D"
        />
        <div className="flex justify-center -mx-4 relative">
          <div className="w-full lg:w-9/12 px-4">
            <Form method="post">
              <input
                type={"hidden"}
                value={data.ENV.SENDGRID_API_KEY}
                name="sgapikey"
              />
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    {response?.name ? (
                      <em className="text-red-600">{response.name}</em>
                    ) : null}
                    <motion.input
                      {...snapFromLeftAnimation}
                      transition={{ delay: randomShortInterval() }}
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                      name="name"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    {response?.email ? (
                      <em className="text-red-600">{response.email}</em>
                    ) : null}
                    <motion.input
                      {...snapFromRightAnimation}
                      transition={{ delay: randomShortInterval() }}
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                      name="email"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    {response?.message ? (
                      <em className="text-red-600">{response.message}</em>
                    ) : null}
                    <motion.textarea
                      {...snapFromBottomAnimation}
                      transition={{ delay: randomShortInterval() }}
                      rows={4}
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                      name="message"
                    ></motion.textarea>
                  </div>
                  {response?.successMessage && (
                    <SuccessMessage
                      heading="Success"
                      description={
                        response?.successMessage || "Your email has been sent"
                      }
                    />
                  )}
                  {response?.errorMessage && (
                    <SuccessMessage
                      heading="Error"
                      description={response?.errorMessage}
                    />
                  )}
                </div>
                <div className="w-full px-4">
                  <div className="py-4 text-center">
                    <motion.button
                      {...fadeInAnimation}
                      transition={{ delay: animationDelay[2] }}
                      className="hover-zoom-animation inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90"
                    >
                      Contact Me
                    </motion.button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
