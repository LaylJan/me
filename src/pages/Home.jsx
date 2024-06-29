import { useEffect, useState } from "react";
import Webdev from "../assets/Webdev.svg";
import cap from "../assets/graduationcap.svg";
import brain from "../assets/brain.svg";
import proj from "../assets/project.svg";
import skill from "../assets/skill.svg";
import contact from "../assets/contact.svg";

const Home = ({ scrollToSection, goto }) => {
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
      <div className="m-1">
        <p className="bg-light-blue inline-flex text-black text-sm md:text-base  font-semibold pl-2 pr-2 rounded-3xl items-center">
          <img src={Webdev} alt="Web Developer" className="mr-2" />
          Web Developer
        </p>
      </div>
      <p className="text-white text-justify font-semibold text-base md:text-lg">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="hidden lg:block">
        <div className="flex flex-col items-start m-8 text-xl font-bold text-white">
          <button
            onClick={() => scroll("Contact")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex mb-1 p-1">
              <img src={contact} alt="" className="mr-2" />
              Contact
            </div>
          </button>
          <button
            onClick={() => scroll("Education")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex mb-1 p-1">
              <img src={cap} alt="" className="mr-2" />
              Education
            </div>
          </button>
          <button
            onClick={() => scroll("Experiences")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex mb-1 p-1">
              <img src={brain} alt="" className="mr-2" />
              Experiences
            </div>
          </button>
          <button
            onClick={() => scroll("Skills")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex mb-1 p-1">
              <img src={skill} alt="" className="mr-2" />
              Skills
            </div>
          </button>
          <button
            onClick={() => scroll("Projects")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex p-1">
              <img src={proj} alt="" className="mr-2" />
              Projects
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
