import React from "react";

interface ISkillCard {
  title: string;
  content: string;
  icon?: string;
}

const SkillCard: React.FC<ISkillCard> = ({ title, content, icon }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/4 px-4">
      <div className="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
        <div className="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            className="fill-current"
          >
            <path d="M18.6668 28.6666C18.6668 28.1666 18.6668 27.4999 18.8335 26.9999H10.3335V23.6666H7.00016V10.3333H10.3335V6.99992H23.6668V10.3333H27.0002V18.8333C27.5002 18.6666 28.1668 18.6666 28.6668 18.6666C29.1668 18.6666 29.8335 18.6666 30.3335 18.8333V10.3333H33.6668V0.333252H23.6668V3.66659H10.3335V0.333252H0.333496V10.3333H3.66683V23.6666H0.333496V33.6666H10.3335V30.3333H18.8335C18.6668 29.8333 18.6668 29.1666 18.6668 28.6666ZM27.0002 3.66659H30.3335V6.99992H27.0002V3.66659ZM3.66683 3.66659H7.00016V6.99992H3.66683V3.66659ZM7.00016 30.3333H3.66683V26.9999H7.00016V30.3333ZM30.3335 21.9999V26.9999H35.3335V30.3333H30.3335V35.3333H27.0002V30.3333H22.0002V26.9999H27.0002V21.9999H30.3335Z" />
          </svg>
        </div>
        <h3 className="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
          {title}
        </h3>
        <p className="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
          {content}
        </p>
        <div>
          <span className="absolute top-0 right-0 -z-1">
            <svg
              width="218"
              height="109"
              viewBox="0 0 218 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.05"
                cx="156.5"
                cy="-47.5"
                r="156.5"
                fill="white"
              />
              <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
            </svg>
          </span>
          <span className="absolute bottom-1 left-1 -z-1">
            <svg
              width="23"
              height="32"
              viewBox="0 0 23 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="21.262"
                cy="1.12081"
                r="1.12081"
                transform="rotate(90 21.262 1.12081)"
                fill="white"
              />
              <circle
                cx="21.262"
                cy="30.4863"
                r="1.12081"
                transform="rotate(90 21.262 30.4863)"
                fill="white"
              />
              <circle
                cx="1.76005"
                cy="1.12081"
                r="1.12081"
                transform="rotate(90 1.76005 1.12081)"
                fill="white"
              />
              <circle
                cx="1.76005"
                cy="30.4863"
                r="1.12081"
                transform="rotate(90 1.76005 30.4863)"
                fill="white"
              />
              <circle
                cx="11.6228"
                cy="1.12081"
                r="1.12081"
                transform="rotate(90 11.6228 1.12081)"
                fill="white"
              />
              <circle
                cx="11.6228"
                cy="30.4863"
                r="1.12081"
                transform="rotate(90 11.6228 30.4863)"
                fill="white"
              />
              <circle
                cx="21.262"
                cy="10.9839"
                r="1.12081"
                transform="rotate(90 21.262 10.9839)"
                fill="white"
              />
              <circle
                cx="1.76005"
                cy="10.9839"
                r="1.12081"
                transform="rotate(90 1.76005 10.9839)"
                fill="white"
              />
              <circle
                cx="11.6228"
                cy="10.9839"
                r="1.12081"
                transform="rotate(90 11.6228 10.9839)"
                fill="white"
              />
              <circle
                cx="21.262"
                cy="20.8469"
                r="1.12081"
                transform="rotate(90 21.262 20.8469)"
                fill="white"
              />
              <circle
                cx="1.76005"
                cy="20.8469"
                r="1.12081"
                transform="rotate(90 1.76005 20.8469)"
                fill="white"
              />
              <circle
                cx="11.6228"
                cy="20.8469"
                r="1.12081"
                transform="rotate(90 11.6228 20.8469)"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
