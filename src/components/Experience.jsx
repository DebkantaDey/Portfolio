import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style/styles";
//import { experiences } from "../constants";
import  SectionWrapper from "../hok/SectionWrapper";
import { textVariant } from "../utils/motion";
import Kus from '../assets/Experience/Kus.png'
import Elegant from '../assets/Experience/Elegant.png';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const experiences = [
    {
        title: "Junior Web Developer",
        company_name: "Kus Software",
        icon:Kus,
        iconBg: "#E6DEDD",
        date: "June 2023 - Present",
        points: [
            "Developing and maintaining web applications using HTML5, Css3, JavaScript, React.js and other related technologies.",
            "Crafting innovative and high-performing websites and web applications.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Elegant Pro Designs",
        icon: Elegant,
        iconBg: "#E6DEDD",
        date: "March 2023 - May 2023",
        points: [
            "Developing and maintaining web applications using WordPress and other related technologies.",
            "Install all plaugin and set payment get Way creating page like donation, about, contact us etc.  ",
            "I actively engaged in the intricate world of web development, gaining invaluable hands-on experience and contributing to real-world projects using HTML, CSS, JavaScript and WordPress."
        ],
    },
];
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div   name="Experience" className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className="flex justify-center items-center text-5xl font-bold text-white pb-4">
                    Experience.
                </h2>
            </motion.div>


            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

// export default SectionWrapper(Experience, "work");

export default Experience;