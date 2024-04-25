import React from 'react';
import MyPortfolio from "../assets/portfolio/Portfolio.png";
import { FaGithub  } from 'react-icons/fa';
import Omaha from '../assets/portfolio/Omaha.png';
import RawNews from '../assets/portfolio/RawNews.png';
import TatumEyeCare from '../assets/portfolio/TatumEyeCare.png';
import Kitchen from '../assets/portfolio/Kitchen.png';
import Bathroom from '../assets/portfolio/Bathroom.png';
import Songanize from '../assets/portfolio/Songanize.png';
import E_Commerce from '../assets/portfolio/E_Commerce.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



const Portfolio = () => {
    const websites = [
        
        {
          id: 1,
          src: MyPortfolio,
          name: "My Portfolio",
          demoLink: "", 
          githubRepo: "",
          techstack: "Reactjs, Tailwind Css, Framer-motion, Aos Libery",
        },
        // {
        //   id: 2,
        //   name: "Car Rental Website",
        //   src: CarRental,
        //   demoLink: "https://car-rental-172695.netlify.app/home", 
        //   githubRepo: "https://github.com/RickPratihar/Car-Rental-website",
        //   techstack: "React, Bootstrap, Css3",
        // },
        // {
        //   id: 3,
        //   name: "Cara E-Commerce",
        //   src: Shopping,
        //   demoLink: "https://debkantadey.github.io/Calculator/", 
        //   githubRepo: "https://github.com/DebkantaDey/Calculator",
        //   techstack: "React, Material Ui",
        // },
        {
          id: 2,
          name: "Omaha Auto Jump Start Service",
          src: Omaha,
          demoLink: "https://omahacarjumpstart.com/", 
          githubRepo: "",
          techstack: "WordPress",
        },
        {
          id: 3,
          name: "Tatum Eye Care",
          src: TatumEyeCare,
          demoLink: "https://tatumeyecare.com/", 
          githubRepo: "",
          techstack: "WordPress",
        },
        {
          id: 4,
          name: "Premier Kitchens Cork",
          src: Kitchen,
          demoLink: "https://premierkitchenscork.ie/", 
          githubRepo: "",
          techstack: "WordPress",
        },
        {
          id: 5,
          name: "Bathroom Renovations Cork",
          src: Bathroom,
          demoLink: "https://bathroomrenovationscork.ie", 
          githubRepo: "",
          techstack: "HTML, CSS, JavaScript, Jqury, PHP",
        },
        {
          id: 5,
          name: "A1 Caravans Sales",
          src: E_Commerce,
          demoLink: "https://a1caravans.ie", 
          githubRepo: "",
          techstack: "WordPress",
        }
  
       
      ];

      const application = [
        
        {
          id: 1,
          src: Songanize,
          name: "Songanize",
          demoLink: "https://play.google.com/store/apps/details?id=com.songanize&pcampaignid=web_share", 
          githubRepo: "",
          techstack: "React Native",
        },
        {
          id: 2,
          name: "Raw News USA",
          src: RawNews,
          demoLink: "https://play.google.com/store/apps/details?id=com.rawnewsusa.app&pcampaignid=web_share", 
          githubRepo: "",
          techstack: "React Native",
        },
      ];
      const handleDemoButtonClick = (demoLink) => {
        window.open(demoLink, "_blank");
      };
    
      const handleCodeButtonClick = (githubRepo) => {
        window.open(githubRepo, "_blank");
      };
    
      return (
        <div
          name="Project"
          className=" from-blue-300 via-black to-gray-800 mt-20"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className=" flex justify-center items-center text-5xl font-bold text-white  border-b-4 border-yellow-500 pb-4" data-aos="fade-left" >
                Projects
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl" data-aos="fade-right">Website</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 " >
              {websites.map(({ id, src, demoLink, githubRepo, name, techstack }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-5" data-aos="fade-down">
                  <img
                  width={1000}
                  height={1000}
                  className="max-w-full h-48 max-h-full object-cover object-fill object-top rounded-lg  duration-200 hover:scale-105 "
                    src={src}
                    alt=""
                    //className="rounded-md duration-200 hover:scale-105"
                  />
                
                  <div className="my-2 flex flex-col gap-3">
                  <h3 className="text-xl text-center text-white font-medium">
                    {name}
                  </h3>
                  <p className="text-me  px-3 text-blue-300 ">
                    <span className="font-bold text-white">Tech Stack : </span>
                    {techstack}
                  </p>
                </div>
              <div className="flex items-center justify-center pt-4">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105 rounded-full bg-blue-500"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(githubRepo)}
                  className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105"
                >
                 <FaGithub size={35} />
                </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="py-6 flex justify-center items-center text-white text-xl" data-aos="fade-right">Mobile Application</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 " >
              {application.map(({ id, src, demoLink, githubRepo, name, techstack }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-5" data-aos="fade-down">
                  <img
                  width={1000}
                  height={1000}
                  className="max-w-full h-48 max-h-full object-cover object-fill object-top rounded-lg  duration-200 hover:scale-105 "
                    src={src}
                    alt=""
                    //className="rounded-md duration-200 hover:scale-105"
                  />
                
                  <div className="my-2 flex flex-col gap-3">
                  <h3 className="text-xl text-center text-white font-medium">
                    {name}
                  </h3>
                  <div className="text-me  px-3 text-blue-300 ">
                    <span className="font-bold text-white">Tech Stack : </span>
                    {techstack}
                  </div>
                </div>
              <div className="flex items-center justify-center pt-4">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105 rounded-full bg-blue-500"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(githubRepo)}
                  className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105"
                >
                 <FaGithub size={35} />
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio
