import StyledHeading from "~/common/components/StyledHeading";
import avatar from "../../assets/images/Luka-Lazic.png";
import { Link } from "@remix-run/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const CVPage: React.FC = () => {
  return (
    <main className="container">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <div className="shadow rounded-xl overflow-hidden">
            <div className="h-16 mt-8 bg-cover bg-primary border-gray-700 rounded-t-xl"></div>
            <div className="pt-14 p-7 bg-gray-800 relative text-white">
              <div className="user-photo bg-gray-600">
                <img src={avatar} alt="Avatar" className="rounded-xl" />
              </div>
              <div className="text-lg font-semibold mb-1.5">Luka Lazic</div>
              <div className="text-sm text-gray-400 mb-7">
                Frontend Developer
              </div>
              <div className="flex group">
                <button className="download-btn bg-primary bg-opacity-90">
                  Download CV
                </button>
                <button className="download-btn-icon bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="px-7 py-5 block-section bg-gray-800 rounded-xl">
            <StyledHeading text="Basic Info" />
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="text-gray-400">Location</div>
                <div className="font-medium text-right text-white">
                  Belgrade
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Experience</div>
                <div className="font-medium text-right text-white">
                  3+ years
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Availability</div>
                <div className="font-medium text-right text-white">1 week</div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Relocation</div>
                <div className="font-medium text-right text-white">No</div>
              </div>
            </div>
          </div>

          <div className="px-7 py-5 block-section bg-gray-800 rounded-xl">
            <StyledHeading text="Skills" />
            <div className="-m-2 flex flex-wrap">
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Remix</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">Prisma</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Azure DevOps</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">C# basics</span>
              <span className="skill-tag">php</span>
              <span className="skill-tag">Wordpress</span>
              <span className="skill-tag">SEO</span>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-2 mt-4 md:mt-8">
          <div className="p-7 pb-0 block-section">
            <StyledHeading text="About me" />
            <p className="text-white mb-5">
              A motivated and passionate web developer with a wide skill set and
              years of work experience, always striving to improve and create
              the best experience for myself and those surrounding me.
            </p>

            <div className="flex flex-col  space-y-4">
              <Link to="/#contact" className="text-base lg:text-white flex">
                <EnvelopeIcon className="w-6 h-6 mr-2" />
                Contact me
              </Link>

              <ul className="flex space-x-5">
                <li>
                  <a href="#0" className="social-link-hover">
                    <i className="bx bxl-facebook-circle text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="social-link-hover">
                    <i className="bx bxl-twitter text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="social-link-hover">
                    <i className="bx bxl-github text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-7 block-section">
            <StyledHeading text="Experience" />
            <div className="mb-5 item-section">
              <div className="company-logo">
                <i className="bx bxl-twitter text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Senior Developer
                    </div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span>Twitter</span>
                      </div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="text-white">Full time</div>
                    <div className="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>June 2019 – Present</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="mb-5 item-section">
              <div className="company-logo">
                <i className="bx bxl-dropbox text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Middle Developer
                    </div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span>Dropbox</span>
                      </div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="text-white">Full time</div>
                    <div className="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>April 2018 – June 2019</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="item-section">
              <div className="company-logo">
                <i className="bx bxl-blogger text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Junior Developer
                    </div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span>Blogger</span>
                      </div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="text-white">Full time</div>
                    <div className="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>December 2017 – March 2018</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
              </div>
            </div>
          </div>

          <div className="p-7 block-section">
            <StyledHeading text="Education" />
            <div className="mb-5 item-section">
              <div className="w-full space-y-5 ml-0">
                <div className="item-header items-end">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Bachelor of Computer Science
                    </div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          ></path>
                        </svg>
                        <span>Brunel University</span>
                      </div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:text-right">
                    <div className="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>September 2017 – May 2019</span>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CVPage;
