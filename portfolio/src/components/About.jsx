import React from "react";
import { FaDownload } from "react-icons/fa";
import HeroImg2 from "../assets/HeroImg2.png";

const About = () => {
  return (
    <div
      name="About"
      className="flex items-center justify-center min-h-screen mx-16 pt-20 pb-8"
    >
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 pl-3 pr-12 pt-7 xl:gap-0">
        {/* Image */}
        <div className="lg:pb-[1rem] lg:w-1/2 lg:flex-shrink-0 rounded-md overflow-hidden flex justify-center lg:mt-3 ">
          <img
            src={HeroImg2}
            alt="ProfileImg"
            className="shadow-md shadow-gray-700 w-[13rem] lg:w-50 h-auto object-cover rounded-2xl lg:max-w-xs mx-auto lg:mx-0 xl:mt-10 xl:w-[18rem] "
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:ml-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 xl:text-5xl">
            About <span className="text-yellow-600">Me</span>
          </h1>
          <p className="text-gray-600 mb-8 xl:text-xl">
            Hey👋 My name is <span className="font-semibold">Abiral Koju</span>,
            a dedicated and passionate web developer, with a strong foundation
            in different front-end technologies 👨🏻‍💻 and I am committed to
            creating seamless, responsive, and user-friendly websites.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 xl:text-xl cursor-pointer"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <span className=" ml-2">
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
