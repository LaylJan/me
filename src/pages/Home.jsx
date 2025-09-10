import { useEffect, useState } from "react";
import Webdev from "../assets/Webdev.svg";
import cap from "../assets/graduationcap.svg";
import brain from "../assets/brain.svg";
import proj from "../assets/project.svg";
import skill from "../assets/skill.svg";
import contact from "../assets/contact.svg";
import laptop from "../assets/laptop.svg";

const Home = ({
  scrollToSection,
  goto,
  setHighlightSkills,
  highlightSkills,
  setHighlightEducation,
  highlightEducation,
  setHighlightExperiences,
  highlightExperiences,
  setHighlightContact,
  highlightContact
}) => {
  const [page, setPage] = useState("");

  const scroll = (page) => {
    scrollToSection(page);
    setPage(page);
    console.log(page);
  };

  return (
    <div className="m-6 lg:mt-4 ">
      <p className="text-3xl text-white md:text-5xl mb-2 md:mb-5 font-black">
        I'M LYLE JOHN DUMAYAS
      </p>
      <p className="text-white text-justify font-semibold text-base md:text-lg">
        Passionate programmer with hands-on experience in Web Development, and full-stack
        troubleshooting. Adept at rapidly mastering new tech stacks and solving complex challenges across
        both software and hardware systems.
      </p>
      <div className="hidden lg:block">
        <div className="flex flex-col items-start m-4 ml-16 text-2xl font-bold text-white">
          <button
            onClick={() => scroll("Education")}
            onMouseEnter={() => setHighlightEducation(true)}
            onMouseLeave={() => setHighlightEducation(false)}
            className="w-full transition duration-300"
          >
            <div className="flex mb-1 p-1 text-2xl font-extrabold items-center gap-2 hover:scale-105 hover:text-blue-400 transform-gpu transition-all duration-300">
              <span className="mr-2 rounded-full bg-white bg-opacity-20 flex items-center justify-center w-10 h-10 transition duration-300">
                <img src={cap} alt="" className="w-6 h-6 transition duration-300" />
              </span>
              <span className="tracking-wide">Education</span>
            </div>
          </button>
          <button
            onClick={() => scroll("Experiences")}
            onMouseEnter={() => setHighlightExperiences(true)}
            onMouseLeave={() => setHighlightExperiences(false)}
            className="w-full transition duration-300"
          >
            <div className="flex mb-1 p-1 text-2xl font-extrabold items-center gap-2 hover:scale-105 hover:text-purple-400 transform-gpu transition-all duration-300">
              <span className="mr-2 rounded-full bg-white bg-opacity-20 flex items-center justify-center w-10 h-10 transition duration-300">
                <img src={brain} alt="" className="w-6 h-6 transition duration-300" />
              </span>
              <span className="tracking-wide">Experiences</span>
            </div>
          </button>
          <button
            onClick={() => scroll("Skills")}
            onMouseEnter={() => setHighlightSkills(true)}
            onMouseLeave={() => setHighlightSkills(false)}
            className="w-full transition duration-300"
          >
            <div className="flex mb-1 p-1 text-2xl font-extrabold items-center gap-2 hover:scale-105 hover:text-green-400 transform-gpu transition-all duration-300">
              <span className="mr-2 rounded-full bg-white bg-opacity-20 flex items-center justify-center w-10 h-10 transition duration-300">
                <img src={skill} alt="" className="w-6 h-6 transition duration-300" />
              </span>
              <span className="tracking-wide">Skills</span>
            </div>
          </button>
          {/* <button
            onClick={() => scroll("Projects")}
            className="w-full transition duration-300"
          >
            <div className="flex p-1 text-2xl font-extrabold items-center gap-2 hover:scale-105 hover:text-pink-400 transform-gpu transition-all duration-300">
              <span className="mr-2 rounded-full bg-white bg-opacity-20 flex items-center justify-center w-10 h-10 transition duration-300">
                <img src={proj} alt="" className="w-6 h-6 transition duration-300" />
              </span>
              <span className="tracking-wide">Projects</span>
            </div>
          </button> */}
          <button
            onClick={() => scroll("Contact")}
            onMouseEnter={() => setHighlightContact(true)}
            onMouseLeave={() => setHighlightContact(false)}
            className="w-full transition duration-300"
          >
            <div className="flex mb-1 p-1 text-2xl font-extrabold items-center gap-2 hover:scale-105 hover:text-red-400 transform-gpu transition-all duration-300">
              <span className="mr-2 rounded-full bg-white bg-opacity-20 flex items-center justify-center w-10 h-10 transition duration-300">
                <img src={contact} alt="" className="w-6 h-6 transition duration-300" />
              </span>
              <span className="tracking-wide">Contact</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
