import { useEffect, useState } from "react";
import Webdev from "../assets/Webdev.svg";
import cap from "../assets/graduationcap.svg";
import brain from "../assets/brain.svg";
import proj from "../assets/project.svg";
import skill from "../assets/skill.svg";
import contact from "../assets/contact.svg";
import laptop from "../assets/laptop.svg";

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

      <p className="text-white text-justify font-semibold text-base md:text-lg">
        A programmer who seeks knowledge and experience.
      </p>
      <div className="hidden lg:block">
        <div className="flex flex-col items-start m-4 ml-8 text-xl font-bold text-white">
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
          {/* <button
            onClick={() => scroll("Projects")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex p-1">
              <img src={proj} alt="" className="mr-2" />
              Projects
            </div>
          </button> */}
          <button
            onClick={() => scroll("Contact")}
            className="w-full hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <div className="flex mb-1 p-1">
              <img src={contact} alt="" className="mr-2" />
              Contact
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
