import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const list = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-8 md:px-16 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Abiral</h1>
      </div>

      <ul className="hidden  md:flex">
        {list.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-200 xl:text-xl"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* -----//hamburger menu------- */}
      <div
        onClick={() => setToggleNav(!toggleNav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden ml-4"
      >
        {toggleNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {toggleNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {list.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200 hover:text-gray-200"
            >
              <Link
                onClick={() => setToggleNav(!toggleNav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
