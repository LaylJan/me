import { useState } from "react";
import I7 from "../assets/IntelliSeven.png";

function Experiences() {
  return (
    <div className="font-LS text-justify">
      <p className="text-3xl font-black">EXPERIENCES:</p>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200">
        <img src={I7} alt="IntelliSeven" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">IntelliSeven Solutions Inc.</p>
          <div className="flex flex-col">
            <p className="">February 2024 - May 2024</p>
            <p className="">Corporate office in Quezon City</p>
            <p className="">Internship(OJT)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
