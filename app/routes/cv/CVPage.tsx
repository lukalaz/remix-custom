import StyledHeading from "~/common/components/StyledHeading";
import avatar from "../../assets/images/Luka-Lazic.png";
import { Link } from "@remix-run/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  animationDelay,
  fadeInAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "~/common/utils/AnimationVariants";

const CVPage: React.FC = () => {
  return (
    <main className="container">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <motion.div
            {...snapFromLeftAnimation}
            transition={{ delay: animationDelay[1] }}
            className="shadow rounded-xl overflow-hidden"
          >
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
                <a
                  className="download-btn text-center bg-primary bg-opacity-90"
                  href="assets/cv/CV LUKA LAZIC.pdf"
                  target="_blank"
                >
                  <div>Download CV</div>
                </a>
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
          </motion.div>
          <motion.div
            {...snapFromLeftAnimation}
            transition={{ delay: animationDelay[2] }}
            className="px-7 py-5 block-section bg-gray-800 rounded-xl"
          >
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
                  9+ years
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Availability</div>
                <div className="font-medium text-right text-white">
                  10h per week
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Relocation</div>
                <div className="font-medium text-right text-white">No</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...snapFromLeftAnimation}
            transition={{ delay: animationDelay[3] }}
            className="px-7 py-5 block-section bg-gray-800 rounded-xl"
          >
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
          </motion.div>
        </div>

        <div className="space-y-5 lg:col-span-2 mt-4 md:mt-8">
          <motion.div
            {...snapFromRightAnimation}
            transition={{ delay: animationDelay[1] }}
            className="p-7 pb-0 block-section"
          >
            <StyledHeading text="About me" />
            <p className="text-white mb-5">
              As a dedicated and enthusiastic web developer, I bring a diverse
              skill set and years of hands-on experience to every project. I am
              committed to continuous improvement, not only for myself but also
              to enhance the experience of those around me.
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
          </motion.div>

          <motion.div
            {...fadeInAnimation}
            transition={{ delay: animationDelay[2] }}
            className="p-7 pb-0 block-section"
          >
            <StyledHeading text="Experience" />
            <div className="mb-5 item-section">
              <div className="company-logo">
                <i className="bx bxl-twitter text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Frontend Developer
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
                        <span>Nul Tien</span>
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
                        <span>Belgrade</span>
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
                      <span>Mar 2021 - Present</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  <span className="mb-2 block">
                    Within my role at Nul Tien, I am actively engaged with the
                    BOSS portal—a versatile front-end application designed to
                    empower employees in managing their work effectively. This
                    dynamic platform enables us to track project-specific time
                    allocation, create schedules, execute contracts, and
                    meticulously oversee our interactions with various client
                    organizations. It also facilitates the management of vital
                    details, including contact persons and important documents.
                  </span>
                  <span className="mb-2 block">
                    In tandem with the desktop application, I am involved in the
                    development of the ERA app, a mobile counterpart to the
                    portal. Built using React Native and interfacing seamlessly
                    with the same APIs, the ERA app ensures that our
                    functionality remains accessible and efficient on mobile
                    devices.
                  </span>
                  <span className="mb-2 block">
                    In house we have a custom written React components library
                    and a React table library that I am contributing to when
                    there is time. We use those in both our internal and
                    commercial projects.
                  </span>
                  <span className="mb-2 block">
                    Furthermore, I've been exploring the world of C# and the
                    .NET framework, broadening my skill set to complement our
                    tech stack.
                  </span>
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
                      Web and Front-end Developer
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
                        <span>BlueGrid</span>
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
                        <span>Belgrade</span>
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
                      <span>March 2019 - February 2021</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  <span className="mb-2 block">
                    During my time at BlueGrid, I contributed to the MyAccident
                    platform, a dynamic enterprise focused on assisting
                    individuals across the United States in obtaining crucial
                    information about their car accidents and securing legal
                    support. The platform's initial foundation was established
                    using WordPress, a foundation that we later adeptly
                    transitioned to the Express framework. This allowed for
                    improved performance and scalability.
                  </span>

                  <span className="mb-2 block">
                    One of the defining aspects of my role involved managing a
                    robust MongoDB database housing extensive accident-related
                    data. This repository was regularly updated by various
                    agencies, each using distinct data formats, making the
                    database integration an intricate and essential part of our
                    operations.
                  </span>

                  <span className="mb-2 block">
                    Additionally, I ventured into the world of React
                    development, where I played an integral role in a discrete,
                    internal project. This project now resides on the AWS
                    platform, demonstrating my adaptability and versatility in
                    tackling diverse technologies and platforms.
                  </span>
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="mb-5 item-section">
              <div className="company-logo">
                <i className="bx bxl-blogger text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Web Developer
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
                        <span>GuitarZoom</span>
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
                        <span>Remote</span>
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
                      <span>September 2016 - March 2018</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  <span className="mb-2 block">
                    Guitarzoom is an online learning platform for guitar
                    players. While working there, I have worked on our main
                    website and members area website (used by 10k+ users) which
                    both were running on WordPress (back then at least) as well
                    as on many stand-alone PHP/JS pages used for marketing and
                    sales purposes.
                  </span>
                  <span className="mb-2 block">
                    Since the company was mostly marketing-driven, the
                    environment was dynamic and we experimented with many
                    different third-party marketing, tracking and sales
                    platforms. My main job was building and maintaining the
                    WordPress website as well as the marketing pages and
                    integrating everything with our various marketing tools and
                    platforms. We made lots of last minute changes before
                    promotions go live so I have learned to be flexible and
                    quick with my work.
                  </span>
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="mb-5 item-section">
              <div className="company-logo">
                <i className="bx bxl-blogger text-3xl"></i>
              </div>

              <div className="w-full space-y-5 ml-0">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Web Developer
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
                        <span>LegallyConcealed</span>
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
                        <span>Remote</span>
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
                      <span>September 2014 - August 2016</span>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  <span className="mb-2 block">
                    I was a part of Legally Concealed, a digital marketing firm
                    specializing in the distribution of on-demand self-defense
                    and home-defense videos for the U.S. audience. My position
                    primarily revolved around being a WordPress and PHP
                    developer, with close collaboration with the marketing team,
                    which constituted the majority of the company's workforce.
                  </span>
                  <span className="pb-2 block">
                    Within the framework of a small and agile remote team, we
                    thrived in a high-speed work environment. My central
                    responsibilities encompassed the development and upkeep of
                    the WordPress website, crafting standalone PHP sales pages,
                    and creating seamless integrations with third-party software
                    for customer behavior tracking and sales analytics.
                  </span>
                </p>

                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="w-full space-y-5 ml-0 pb-2">
              <div className="item-header">
                <div className="space-y-1.5">
                  <div className="font-medium text-white text-md">
                    Web Developer
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
                      <span>Freelancer.com</span>
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
                      <span>Remote</span>
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
                    <span>July 2012 - September 2014</span>
                  </div>
                </div>
              </div>
              <p className="text-white">
                <span className="mb-2 block">
                  My freelancing journey has exposed me to a diverse range of
                  technologies, commencing with Joomla and later transitioning
                  to WordPress due to the surging demand for WordPress
                  development. Over a span of two years, I successfully
                  delivered over 100 projects, maintaining a flawless job
                  completion rate and garnering highly favorable reviews from
                  satisfied clients. This collaborative experience also paved
                  the way for lasting professional relationships, as evidenced
                  by repeat partnerships with individuals who entrusted me with
                  their projects. For a more comprehensive overview of my
                  freelance work and client feedback, you can visit my (wildly
                  outdated) profile{" "}
                  <a
                    href="https://www.freelancer.com/u/lukalazic"
                    className="text-primary"
                    target="_blank"
                  >
                    by clicking here
                  </a>
                  .
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInAnimation}
            transition={{ delay: animationDelay[3] }}
            className="p-7 block-section"
          >
            <StyledHeading text="Education" />
            <div className="mb-5 item-section">
              <div className="w-full space-y-5 ml-0">
                <div className="item-header items-end">
                  <div className="space-y-1.5">
                    <div className="font-medium text-white text-md">
                      Bachelor of Computer Science
                    </div>
                    <div className="font-medium text-white text-xs">
                      No Degree
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
                        <span>Faculty of Mathematics</span>
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
                        <span>Belgrade</span>
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
                      <span>2009 - 2014</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default CVPage;
