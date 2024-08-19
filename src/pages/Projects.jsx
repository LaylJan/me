import { useState } from "react";
import flip from "../assets/flip-game.png";
import calcu from "../assets/Calculator App.png";
import cs50 from "../assets/CS50.png";

const Projects = ({ goto }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">SELECTED PROJECTS:</p>
      <div
        onClick={() => goto("https://flip-game-alpha.vercel.app/")}
        className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <img src={flip} alt="IntelliSeven" className="w-28 hidden md:block" />
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-xl">Flip-Game</p>
          <div className="flex flex-col">
            <p className="">
              A simple matching game with Pokémon where I used this project to
              try my first very own vercel server.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => goto("https://calculator-lemon-pi-85.vercel.app/")}
        className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <img src={calcu} alt="IntelliSeven" className="w-28 hidden md:block" />
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-xl">Calculator</p>
          <div className="flex flex-col">
            <p className="">
              A simple calculator capable of doing simple calculation in PEMDAS
              order.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => goto("https://github.com/LaylJan/CS50-Projects.git")}
        className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <img src={cs50} alt="IntelliSeven" className="w-28 hidden md:block" />
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-xl">CS50x Projects</p>
          <div className="flex flex-col">
            <p className="">
              Check out all the problem sets and laboratories that I answered to
              finish CS50x.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => goto("https://github.com/LaylJan/chat")}
        className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200"
      >
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-xl">Chat-app</p>
          <div className="flex flex-col">
            <p className="">
              A simple local messaging app that can save messages. This is to
              practice connecting databases with queries and get, post methods
              to my front-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
