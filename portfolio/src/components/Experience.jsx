import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import reactImage from "../assets/reactImage.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.jpg";
import Firebase from "../assets/Firebase.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400 pt-6",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
  ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-4">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline xl:text-5xl">
            Experience
          </p>
          <p className="py-6 xl:text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
