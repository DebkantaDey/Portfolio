import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import jQuery from "../assets/jQuery.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import PHP from "../assets/PHP.png";
import MySQL from "../assets/MySQL.png";
import JAVA from "../assets/JAVA.png";
import Bootstrap from '../assets/Bootstrap.png';
import WordPress from '../assets/WordPress.png'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
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
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: Bootstrap,
          title: "Bootstrap",
          style: "shadow-gray-400"
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: jQuery,
          title: "jQuery",
          style: "shadow-yellow-700",
        },
        {
          id: 7,
          src: react,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 8,
          src: redux,
          title: "REDUX",
          style: "shadow-purple-400",
        },
        {
          id: 9,
          src: PHP,
          title: "PHP",
          style: "shadow-blue-600",
        },
        {
          id: 10,
          src: MySQL,
          title: "MySQL",
          style: "shadow-blue-400",
        },
        {
          id: 11,
          src: JAVA,
          title: "JAVA",
          style: "shadow-purple-400",
        },
        {
          id: 12,
          src: WordPress,
          title: "WordPress",
          style: "shadow-blue-400",
        }
      ];
    
      return (
        <div
            name="skills"
            className=" from-gray-800 via-black to-blue-300 pt-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="flex justify-center items-center text-5xl font-bold text-white border-b-4 border-yellow-500 pb-4">
                        SKILLS
                    </p>
                    <p className="py-6 flex justify-center items-center text-white text-xl">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
                    {techs.map(({ id, src, title, style }) => (
                        <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gradient-to-t from-blue-700 pb-5`}
                        >
                            <img src={src} alt="" className="w-16 mx-auto mt-3" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      );
}

export default Skills