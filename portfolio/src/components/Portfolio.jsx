import { data } from "../data/data.js";
import React from "react";

const Portfolio = () => {
  //projects file
  const project = data;

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white flex flex-col justify-center pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 xl:text-5xl">
            Portfolio
          </p>
          <p className="pt-6 xl:text-xl">Some of my work are below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {project.map(({ id, name, image, github, live }) => (
            <div
              key={id}
              style={{
                backgroundImage: `url(${image})`,
                height: "15rem",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div bg-contain"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-100 bg-gradient-to-t from-gray-700 to-gray-500 w-full h-full pt-10 rounded-md hover:duration-200">
                <span className="text-2xl font bold text-white font-bold tracking-wider ">
                  {name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-red-500 text-white font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-green-500 text-white font-bold text-lg"
                    >
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
