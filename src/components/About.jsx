import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

//import MyImage from "../assets/tahneetk.png";

function About() {
  return (
    <div
      name="about"
      className="w-full pt-20 h-screen  from-gray-800 via-black to-blue-300 md:min-h-[75vh] relative "
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:mx-52 md:mt-20" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <motion.Typography
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-normal text-xl text-align: justify  text-blue-200  m-5 md:m-0 p-6 md:ml-5 mt-5 md:w-5/6 lg:w-4/5 xl:w-3/4 bg-blue-200 rounded-md shadow-2xl drop-shadow-sm backdrop-blur-md bg-opacity-20 max-h-[70vh] overflow-y-auto"
        >
          <Typography
            className=" text-5xl text-blue-400 font-bold text-center mt-2 mb-5 border-b-2 border-yellow-500 pb-4"

          >
            About Me
          </Typography>
          {/* <RxTriangleLeft className="absolute top-10 -left-10 text-white text-[70px] lg-max:hidden" /> */}
          I'm{" "}
          <span className="font-bold mx-2 text-blue-400">Debkanta Dey </span>{" "}
          a passionate and experienced web developer dedicated to crafting stunning online experiences. With a Bachelor of Technology degree in Computer Science and Engineering under my belt, I've honed my skills to bring your digital visions to life.
          <br />
          <br />
          Proficiency is key, and I pride myself on my mastery of a wide array of tools and technologies. From the fundamental building blocks like HTML and CSS to the dynamic powerhouses of JavaScript, React JS, Node JS, and Express JS, I thrive on utilizing the latest innovations to elevate your projects.
          <br />
          <br />Actions speak louder than words, and my portfolio is a testament to my dedication and skill. I've had the privilege of working on a diverse range of projects, each presenting its own unique challenges and opportunities for creativity.
          From developing sleek and intuitive interfaces for 
          <span className="font-bold mx-2 text-blue-400">
          Auto Jump Start service and Tatum Eye Care to crafting robust solutions for Bathroom Renovations Cork,
          </span>
          I've left my mark on the digital landscape. Additionally, I've contributed to the creation of innovative applications like 
          <span className="font-bold mx-2 text-blue-400">Songanize and Raw News USA</span>
          , showcasing my adaptability and commitment to excellence.
          <br />
          <br />
          In essence, I'm more than just a web developer—I'm a visionary, a problem-solver, and a partner in your digital journey. With a solid educational background, a diverse skill set, and a track record of successful projects, I'm here to transform your ideas into reality. Let's collaborate and build something extraordinary together.
          <br />
        </motion.Typography>
      </div>
    </div>
  );
}

export default About;
