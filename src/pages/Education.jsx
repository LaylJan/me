import { useState } from "react";
import TNHS from "../assets/Tagumpay.png";
import NEU from "../assets/New Era.svg";
import STI from "../assets/STI.png";
import CS50 from "../assets/CS50.png";

const Education = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-3xl font-black">EDUCATIONAL BACKROUND:</p>
      <div>
        <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5">
          <img src={TNHS} alt="Tagumpay" className="w-32" />
          <div className="flex flex-col">
            <p className="font-bold">Tagumpay National High School</p>
            <p className="">2015 - 2019</p>
            <p className="">Rodriguez, Rizal</p>
            <p className="">Junior High School</p>
          </div>
        </div>
        <div className="flex text-xl font-medium mt-5 mb-5 ml-5 items-center space-x-5">
          <img src={NEU} alt="New Era" className="w-32" />
          <div className="flex flex-col">
            <p className="font-bold">New Era University</p>
            <p className="">2019 - 2021</p>
            <p className="">Quezon City</p>
            <p className="">TVL - Information and Communication Technology </p>
          </div>
        </div>
        <div className="flex text-xl font-medium mt-5 mb-5 ml-5 items-center space-x-5">
          <img src={STI} alt="STI" className="w-32 rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold">STI College Marikina</p>
            <p className="">2022 - 2024</p>
            <p className="">Marikina City</p>
            <p className="">Associate in Computer Technology (ACT)</p>
          </div>
        </div>
      </div>
      <p className="text-3xl font-black">TRAINING:</p>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5">
        <img src={CS50} alt="Tagumpay" className="w-32" />
        <div className="flex flex-col">
          <p className="font-bold">CS50x</p>
          <p className="">
            CS50x is an introductory computer science course that teaches
            fundamentals such as algorithms, data structures, software
            engineering, and web development through engaging and rigorous
            problem sets and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
