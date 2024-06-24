import React from "react";
import recipe from "../assets/recipe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 111,
      src: recipe,
    },
    {
      id: 112,
      src: recipe,
    },
    {
      id: 113,
      src: recipe,
    },
    {
      id: 114,
      src: recipe,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white flex flex-col justify-center pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 xl:text-5xl">
            Portfolio
          </p>
          <p className="pt-6 xl:text-xl">Some of my work are below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md " />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-green-400 to-green-600 hover:bg-green-800">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-red-400 to-red-600 hover:bg-red-800">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
