import { useState } from "react";
import git from "../assets/github.svg";
import link from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import copy from "../assets/copy.svg";
import resumeLink from "../assets/resume.pdf";

const Contact = ({ goto }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">INFO:</p>
      <div>
        <p className="flex font-bold text-base md:text-xl">
          layljandee@gmail.com
          <button className="ml-1 hover:bg-white hover:bg-opacity-20 transition duration-200">
            <img src={copy} className="p-1" alt="" />
          </button>
        </p>
      </div>
      <div className="flex mr-2 mb-2 justify-center md:justify-start">
        <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() => goto("https://github.com/LaylJan")}
        >
          <img src={git} className="w-12" alt="" />
          <p className="font-bold text-2xl">Github</p>
        </button>
        {/* <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() => goto(resumeLink)}
        >
          <img src={link} className="w-12" alt="" />
          <p className="font-bold text-2xl">Linkedin</p>
        </button> */}
        <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() => goto(resumeLink)}
        >
          <img src={resume} className="w-12" alt="" />
          <p className="font-bold text-2xl">Resume</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
