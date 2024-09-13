import { useState } from "react";
import I7 from "../assets/IntelliSeven.png";

const Experiences = ({ goto }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">EXPERIENCES:</p>
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
    </div>
  );
};

export default Experiences;
