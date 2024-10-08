import { useState } from "react";
import Java from "../assets/Java.png";
import RJS from "../assets/Reactjs.png";
import py from "../assets/python.png";
import responsive from "../assets/Responsive.svg";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/Tailwind.png";
import sqlite from "../assets/sqlite.png";

const Skills = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">SKILLS:</p>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={RJS} alt="IntelliSeven" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={RJS} alt="RJS" className="w-4 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">React.js, Vite</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Through my internship at IntelliSeven Inc., where we primarily
              used React.js and Vite, I became confident in my skills with
              React. In fact this portfolio is made with react js.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={Java} alt="Java" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img
              src={Java}
              alt="Java"
              className="w-6 mr-1 -mt-1 md:hidden bg-white rounded-full"
            />
            <p className="font-bold text-2xl md:text-xl">Java</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              I picked up Java, a versatile, object-oriented programming
              language widely used for building cross-platform applications,
              during my early years at STI.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={py} alt="python" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={py} alt="python" className="w-6 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">Python, Flask</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Python is a user-friendly language with extensive libraries. As I
              embark on CS50, Python is used for most problem sets, including
              the most challenging one, which is created with Python Flask.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={bootstrap} alt="Bootstrap" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img
              src={bootstrap}
              alt="bootstrap"
              className="w-6 mr-1 -mt-1 md:hidden"
            />
            <p className="font-bold text-2xl md:text-xl">Bootstrap</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Bootstrap, a popular CSS framework for creating responsive and
              visually appealing websites, was the tool I used to design my
              websites in the CS50 problem sets.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img
          src={tailwind}
          alt="IntelliSeven"
          className="w-24 hidden md:block"
        />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img
              src={tailwind}
              alt="tailwind"
              className="w-6 mr-1 -mt-1 md:hidden"
            />
            <p className="font-bold text-2xl md:text-xl">Tailwind CSS</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              At IntelliSeven Inc., Tailwind CSS is widely used to design web
              pages. During my internship there, I became very comfortable using
              this framework.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img
          src={sqlite}
          alt="IntelliSeven"
          className="w-24 hidden md:block bg-white p-1"
        />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img
              src={sqlite}
              alt="tailwind"
              className="w-6 mr-1 -mt-1 md:hidden bg-white p-1"
            />
            <p className="font-bold text-2xl md:text-xl">SQLite3</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              CS50 teached me about databases using SQLite3, providing an
              excellent introduction to working with queries.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img
          src={responsive}
          alt="responsive"
          className="w-24 hidden md:block"
        />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img
              src={responsive}
              alt="Responsive"
              className="w-6 mr-1 -mt-1 md:hidden"
            />
            <p className="font-bold text-2xl md:text-xl">Responsive Design</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              At STI, I learned responsive design, a key web development concept
              that ensures websites work well on all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
