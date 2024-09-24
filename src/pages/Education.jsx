import { useState } from "react";
import TNHS from "../assets/Tagumpay.png";
import NEU from "../assets/New Era.svg";
import STI from "../assets/STI.png";
import CS50 from "../assets/CS50.png";
import freeCodeCamp from "../assets/FreeCodeCamp.png";

const Education = ({ goto }) => {
  return (
    <div className="font-LS md:text-justify">
      <p className=" text-2xl md:text-3xl font-black">EDUCATIONAL BACKROUND:</p>
      <div>
        <div
          onClick={() => goto("https://www.facebook.com/TagumpayNHS03/")}
          className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
        >
          <img src={TNHS} alt="Tagumpay" className="w-20 md:w-24" />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">Tagumpay National High School</p>
            <p className="">Rodriguez, Rizal</p>
            <p className="">Junior High School</p>
          </div>
        </div>
        <div
          onClick={() => goto("https://neu.edu.ph/main/")}
          className="flex text-base md:text-xl font-medium mt-5 mb-5 md:ml-5 items-center space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
        >
          <img src={NEU} alt="New Era" className="w-20 md:w-24" />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">New Era University</p>
            <p className="">Quezon City</p>
            <p className="">TVL - Information and Communication Technology </p>
          </div>
        </div>
        <div
          onClick={() =>
            goto("https://www.sti.edu/campuses-details.asp?campus_id=TUFS")
          }
          className="flex text-base md:text-xl font-medium mt-5 mb-5 md:ml-5 items-center space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
        >
          <img src={STI} alt="STI" className="w-20 md:w-24 rounded-full" />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">STI College Marikina</p>
            <p className="">Marikina City</p>
            <p className="">Associate in Computer Technology (ACT)</p>
          </div>
        </div>
      </div>
      <p className="text-2xl md:text-3xl font-black">TRAINING:</p>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 ">
        <img src={CS50} alt="CS50" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold text-2xl md:text-xl">CS50x</p>
          <p className="text-justify">
            Harvard's CS50, an introductory course in computer science covering
            problem-solving, web development, and programming languages like
            Python and JavaScript.
          </p>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={freeCodeCamp} alt="CS50" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold text-2xl md:text-xl">Resposive Web Design</p>
          <p className="text-justify">
            Certified in Responsive Web Design from freeCodeCamp, with skills in
            HTML, CSS, and responsive layouts."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
