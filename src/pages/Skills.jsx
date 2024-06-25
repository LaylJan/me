import { useState } from "react";
import Java from "../assets/Java.png";
import RJS from "../assets/Reactjs.png";
import py from "../assets/python.png";
import resposive from "../assets/Responsive.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/Tailwind.png";

const Skills = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-3xl font-black">SKILLS:</p>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={RJS} alt="IntelliSeven" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">React.js, Vite</p>
          <div className="flex flex-col">
            <p className="">
              Through my internship at IntelliSeven Inc., where we primarily
              used React.js and Vite, I became confident in my skills with
              React. In fact this portfolio is made with react js.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={Java} alt="IntelliSeven" className="w-28" />
        <div className="flex flex-col -space-y-1">
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
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={py} alt="python" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">Python, Flask</p>
          <div className="flex flex-col">
            <p className="">
              Python is a user-friendly language with extensive libraries. As I
              embark on CS50, Python is used for most problem sets, including
              the most challenging one, which is created with Python Flask.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={resposive} alt="responsive" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">Resposive Design</p>
          <div className="flex flex-col">
            <p className="">
              At STI, I learned responsive design, a key web development concept
              that ensures websites work well on all devices, and further
              enhanced this skill through problem sets in CS50.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={bootstrap} alt="IntelliSeven" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">BootStrap</p>
          <div className="flex flex-col">
            <p className="">
              Bootstrap, a popular CSS framework for creating responsive and
              visually appealing websites, was the tool I used to design my
              websites in the CS50 problem sets.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2">
        <img src={tailwind} alt="IntelliSeven" className="w-28" />
        <div className="flex flex-col -space-y-1">
          <p className="font-bold">Tailwind CSS</p>
          <div className="flex flex-col">
            <p className="">
              At IntelliSeven Inc., Tailwind CSS is widely used to design web
              pages. During my internship there, I became very comfortable using
              this framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
