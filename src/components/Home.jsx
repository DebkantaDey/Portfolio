import React from "react";
import Me from "../assets/Me.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/style.css';

AOS.init();

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  from-blue-300 via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row overflow-x-hidden">
        <div className="flex flex-col justify-center h-full ">
          <p
            className=" text-white md:text-5xl font-bold relative "
            data-aos="fade-up"
          >
            Hello, I'm{" "}
            <span className="uppercase text-blue-300">Debkanta Dey</span>
          </p>

          <p className="text-white text-xl py-4 max-w-md" data-aos="fade-right">
            I am a front-end developer creating user friendly stunning web application.I'm excited to showcase my project
            and share my journey with you.
            <br />
            <br />
          </p>

          <div data-aos="fade-up">
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer visit-button"
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={Me}
            alt=""
            className=" img rounded-r-2xl rounded-b-2xl pl-8 w-80 flex-shrink-0 profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
