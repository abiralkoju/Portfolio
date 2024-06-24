import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroImg from "../assets/HeroImg.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="flex items-center justify-center min-h-screen mx-16 pt-20 pb-8"
    >
      {/* Content Container */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-5 px-12 pt-7 xl:gap-0">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:ml-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 xl:text-5xl">
            I'm a <span className="text-yellow-600">Web Developer</span>
          </h1>
          <p className="text-gray-600 mb-8 xl:text-xl">
            I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I
            might have a thing for Pizzas 🍕. My goal is to deliver high-quality
            code and ensure an optimal user experience 🧑‍💻.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 xl:text-xl cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 lg:flex-shrink-0 rounded-full overflow-hidden flex justify-center lg:-mt-10">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-[13rem] lg:w-50 h-auto object-cover rounded-full lg:max-w-xs mx-auto lg:mx-0 xl:mt-10 xl:w-[18rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
