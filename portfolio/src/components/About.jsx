// import React from "react";
// import { FaDownload } from "react-icons/fa";
// import HeroImg2 from "../assets/HeroImg2.png";

// const About = () => {
//   return (
//     <div
//       name="About"
//       className="flex items-center bg-gradient-to-t from-black to-gray-800 justify-center min-h-screen pt-20 pb-8"
//     >
//       {/* Content Container */}
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 pr-12 pt-7 xl:gap-0">
//         {/* Image */}

//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left lg:ml-10 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold text-gray-200 mb-4 xl:text-5xl">
//             About <span className="text-yellow-500">Me</span>
//           </h1>
//           <p className="text-gray-200 tracking-wide mb-8 xl:text-xl">
//             Hey👋 My name is <span className="font-semibold">Abiral Koju</span>,
//             a dedicated and passionate web developer, with a strong foundation
//             in different front-end technologies 👨🏻‍💻 and I am committed to
//             creating seamless, responsive, and user-friendly websites.
//           </p>
//           <div className="mx-auto lg:mx-0">
//             <a
//               href="/resume.pdf"
//               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-green-600 text-white font-medium rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-700 xl:text-xl cursor-pointer"
//               download={true}
//               target="_blank"
//               rel="noreferrer"
//             >
//               Resume
//               <span className=" ml-2">
//                 <FaDownload />
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-t from-black to-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About <span className="text-yellow-600">Me</span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="leading-[2.75rem]">
              Hello. I'm <span className="text-gray-50 ">Abiral Koju</span>.
              Please take a look around my portfolio.
            </p>
          </div>
          <div>
            <p className="text-2xl tracking-widest">
              I am a web developer with a passion for creating dynamic and
              visually appealing websites. With good foundation of{" "}
              <span className="font-bold">JavaScript</span> and{" "}
              <span className="font-bold">ReactJS</span>, I am equipped to bring
              innovative and user-friendly solutions to life. I expertise on{" "}
              <span className="font-bold">Tailwind CSS</span> and have
              experience deploying and maintaining websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
