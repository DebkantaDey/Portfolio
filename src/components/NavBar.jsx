import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "skills",
    },
    {
      id: 6,
      link: "service",
    },
    {
      id: 7,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-18 px-4 text-white bg-gray-800 fixed z-10 p-2 overflow-x-hidden ">
      <div>
        <h1 className="text-5xl font-serif Times New Roman ml-2  ">
        <span className="text-4xl">Debkanta Dey</span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-6 cursor-pointer capitalize font-medium text-small text-white hover:scale-150 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden absolute top-4 right-5 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6  text-4xl "
            >
              <Link
                onClick={() => setNav(!nav)}
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

export default NavBar;
