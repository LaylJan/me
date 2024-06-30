import { useState } from "react";
import flip from "../assets/flip-game.png";
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
    </div>
  );
};

export default Projects;
