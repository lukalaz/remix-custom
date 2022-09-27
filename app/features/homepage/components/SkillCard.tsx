import React, { useState } from "react";

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
          <img
            src={icon}
            alt={title}
            className={"grayscale group-hover:grayscale-0"}
          />
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
