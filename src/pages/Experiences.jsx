import { useState } from "react";
import I7 from "../assets/IntelliSeven.png";
import BUGC from "../assets/BUGC.png";
import SN from "../assets/SN.png";
import Certificates from "./Certificates";

const Experiences = ({ goto, highlight }) => {
  return (
    <div className="font-LS text-justify">
      <p
        className={`text-2xl md:text-3xl font-black transition duration-300 ${
          highlight ? "text-purple-400 drop-shadow-lg" : ""
        }`}
      >
        EXPERIENCES:
      </p>
      <div
        onClick={() => goto("https://www.intelliseven.com.ph/")}
        className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <div className="flex text-base md:text-xl font-medium mt-2 md:ml-5 items-center space-x-5">
          <img src={BUGC} alt="IntelliSeven" className="w-20 md:w-24" />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">Britannica United Motors</p>
            <div className="flex flex-col">
              <p className="">June 2025 – Present</p>
              <p className="">Automotive dealership group</p>
              <p className="">IT Assistant</p>
            </div>
          </div>
        </div>
        <div className="text-base md:text-xl font-medium mb-5 md:ml-5 items-center md:space-x-5 p-2">
          <p className="">
            Provide regional on-site and remote IT support for hardware and software issues across Luzon branches,
            ensuring optimal functionality of all systems and peripherals to maintain uninterrupted operations.
          </p>
        </div>
      </div>
      <div
        onClick={() => goto("https://en.wikipedia.org/wiki/Solid_North_Party")}
        className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <div className="flex text-base md:text-xl font-medium mt-2 md:ml-5 items-center space-x-5">
          <img
            src={SN}
            alt="IntelliSeven"
            className="w-20 md:w-24 rounded-full object-cover"
          />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">Solid North Partylist</p>
            <div className="flex flex-col">
              <p className="">March 2025 - May 2025</p>
              <p className="">Political Party</p>
              <p className="">IT Support</p>
            </div>
          </div>
        </div>
        <div className="text-base md:text-xl font-medium mb-5 md:ml-5 items-center md:space-x-5 p-2">
          <p className="">
            Resolved hardware and software issues to maintain operational continuity and operated a digital tagging process for efficient supporter benefit distribution.
          </p>
        </div>
      </div>
      <div
        onClick={() => goto("https://www.intelliseven.com.ph/")}
        className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <div className="flex text-base md:text-xl font-medium mt-2 md:ml-5 items-center space-x-5">
          <img src={I7} alt="IntelliSeven" className="w-20 md:w-24" />
          <div className="flex flex-col -space-y-1">
            <p className="font-bold">IntelliSeven Solutions Inc.</p>
            <div className="flex flex-col">
              <p className="">February 2024 - May 2024</p>
              <p className="">Corporate office in Quezon City</p>
              <p className="">Internship</p>
            </div>
          </div>
        </div>
        <div className="text-base md:text-xl font-medium mb-5 md:ml-5 items-center md:space-x-5 p-2">
          <p className="">
            Contributed to the development of a chat admin project, focusing on
            both front-end and back-end tasks mainly using React.js with
            Graphql.
          </p>
        </div>
      </div>
      <p
        className={`text-2xl md:text-3xl font-black transition duration-300 ${
          highlight ? "text-purple-400 drop-shadow-lg" : ""
        }`}
      >
        CERTIFICATES:
      </p>
      <Certificates />
    </div>
  );
};

export default Experiences;
