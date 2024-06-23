import { useState } from "react";
import Java from "../assets/Java.png";
import RJS from "../assets/Reactjs.png";

const Skills = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-3xl font-black">SKILLS:</p>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5">
        <img src={RJS} alt="IntelliSeven" className="w-32" />
        <div className="flex flex-col">
          <p className="font-bold">React</p>
          <div className="flex flex-col">
            <p className="">
              Through my internship at IntelliSeven Inc., where we primarily
              used React.js and Vite, I became confident in my skills with
              React. In fact this portfolio is made with react js.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5">
        <img src={Java} alt="IntelliSeven" className="w-32" />
        <div className="flex flex-col">
          <p className="font-bold">Java</p>
          <div className="flex flex-col">
            <p className="">
              I picked up Java, a versatile, object-oriented programming
              language widely used for building cross-platform applications,
              during my early years at STI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
