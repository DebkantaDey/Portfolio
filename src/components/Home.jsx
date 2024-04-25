import React from "react";
import Me from "../assets/Me.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
//import { Link } from "react-scroll";
//import Link from "react-scroll";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/style.css';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
AOS.init();

const Home = () => {


  const socialLinks = [
    {
        id: 1,
        child: (
            <>
                <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/debkantadey853/",
        style: "rounded-tr-md",
    },
    {
        id: 2,
        child: (
            <>
                <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/DebkantaDey",
    },
    {
        id: 3,
        child: (
            <>
                <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto: debkantadey235@gmail.com",
    },
];
  return (
    <div
      name="home"
      className="w-full  from-blue-300 via-black to-gray-800 md:pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:mt-24">
        <div className="flex flex-col h-full mt-20 text-justify px-10 md:mt-0 md:text-left md:px-5">
          <p
            className=" text-white text-5xl font-bold relative"

          >
            Hello,
            <br></br> I'm{" "}
            <span className="uppercase text-blue-300 pt-2">Debkanta Dey</span>
          </p>

          <p className="text-white text-xl pt-4 max-w-md">
            I am a front-end developer creating user friendly stunning web application.I'm excited to showcase my project
            and share my journey with you.
            <br />
            <br />
          </p>
          <div className=" lg:flex flex-row top-[50%]  sm:flex flex-row top-[50%] left-0 z-100 rounded-full flex-row">
            <ul className="rounded-full flex justify-center">
              {socialLinks.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className={
                    "flex justify-between items-center w-16 h-14  hover:rounded-md duration-300 mb-2 rounded-full cursor-pointer" +
                    " " +
                    style
                  }
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <a
              href="https://drive.google.com/file/d/1UU5dBc4UQWZf0WgLR9C-m36rhLkFUf8O/view?usp=drive_link"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer visit-button"
            >
              Download CV
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="md:pb-0 mt-12">
          <img
            src={Me}
            alt=""
            className=" rounded-r-2xl rounded-b-2xl pl-8 w-80 flex-shrink-0 profile-image mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
