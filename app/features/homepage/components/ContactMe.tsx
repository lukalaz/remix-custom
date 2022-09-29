import StyledTitle from "~/common/components/StyledTitle";

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="pt-[120px]">
      <div className="container">
        <StyledTitle
          title="Have an Project in Mind?"
          preTitle="Contact Me"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="flex justify-center -mx-4">
          <div className="w-full lg:w-9/12 px-4">
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <button className="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90">
                      Contact Me
                    </button>
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
