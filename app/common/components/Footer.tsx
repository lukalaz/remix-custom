import { Link } from "@remix-run/react";

const Footer: React.FC = () => {
  //TODO: clean this up
  return (
    <footer className="bg-black pt-12 pb-12 relative mt-10">
      <div className="container">
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4">
            <div className="mb-10">
              <h2 className="font-bold text-white text-[44px] leading-tight mb-5">
                Let's Talk!
              </h2>
              <h3 className="font-bold text-white opacity-70 text-2xl mb-2">
                Contact Info
              </h3>
              <a
                href="mailto:luka.web.php@gmail.com"
                className="font-medium text-base text-body-color mb-1 block"
              >
                luka.web.php@email.com
              </a>
              <Link
                to={"https://www.linkedin.com/in/luka-lazic-b3411aa1/"}
                className="font-medium text-base text-body-color mb-1"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <div className="mb-10">
              <h3 className="font-semibold text-white text-xl mb-9">
                Quick Links
              </h3>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-base text-body-color mb-3 hover:text-primary"
                  >
                    Relationship
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-base text-body-color mb-3 hover:text-primary"
                  >
                    Legal & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-12 border-t border-white border-opacity-10">
          <p className="font-medium text-base text-body-color text-center">
            All rights reserved by... just kidding,{" "}
            <a
              href="https://github.com/lukalaz/remix-custom"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              fork it freely! I'd appreciate it!
            </a>{" "}
            :D
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
