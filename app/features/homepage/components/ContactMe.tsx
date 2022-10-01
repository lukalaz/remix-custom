import { motion } from "framer-motion";
import StyledTitle from "~/common/components/StyledTitle";
import {
  fadeInAnimation,
  randomShortInterval,
  snapFromBottomAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
  snapFromTopAnimation,
} from "~/common/utils/AnimationVariants";

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="pt-[120px]">
      <div className="container">
        <StyledTitle
          title="Got anything for me?"
          preTitle="Contact Me"
          description="In case you have some questions or just want to say hi, this is a good place to do so. Just need to make it functional first :D"
        />
        <div className="flex justify-center -mx-4 relative">
          <div className="w-full lg:w-9/12 px-4">
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <motion.input
                      {...snapFromLeftAnimation}
                      transition={{ delay: randomShortInterval() }}
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <motion.input
                      {...snapFromRightAnimation}
                      transition={{ delay: randomShortInterval() }}
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <motion.textarea
                      {...snapFromBottomAnimation}
                      transition={{ delay: randomShortInterval() }}
                      rows={4}
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                    ></motion.textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <motion.button
                      {...fadeInAnimation}
                      transition={{ delay: randomShortInterval() }}
                      className="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90"
                    >
                      Contact Me
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
