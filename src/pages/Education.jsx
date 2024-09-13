import { useState } from "react";
import TNHS from "../assets/Tagumpay.png";
import NEU from "../assets/New Era.svg";
import STI from "../assets/STI.png";
import CS50 from "../assets/CS50.png";
import certs from "../assets/certificates.svg";
import { useNavigate } from "react-router-dom";

const Education = ({ goto }) => {
  const navigate = useNavigate();
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
            <p className="">2015 - 2019</p>
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
            <p className="">2019 - 2021</p>
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
            <p className="">2022 - 2024</p>
            <p className="">Marikina City</p>
            <p className="">Associate in Computer Technology (ACT)</p>
          </div>
        </div>
      </div>
      <p className="text-2xl md:text-3xl font-black">TRAINING:</p>
      <div
        onClick={() => {
          goto("https://cs50.harvard.edu/x/2024/");
        }}
        className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
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
      <div className="flex w-full justify-end">
        <div
          onClick={() => {
            navigate("/certs");
          }}
          className="md:justify-end w-full md:w-2/5 flex font-medium mt-2 mb-5 md:ml-0 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
        >
          <img src={certs} className="md:-mr-1 mr-1" alt="CS50" />
          <p className="font-bold text-lg md:text-xl">VIEW MY CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
