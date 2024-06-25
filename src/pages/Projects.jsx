import { useState } from "react";
import flip from "../assets/flip-game.png";

const Projects = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">PROJECTS:</p>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2 hover:bg-white hover:bg-opacity-10 transition duration-200">
        <img src={flip} alt="IntelliSeven" className="w-28 hidden md:block" />
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-xl">Flip-Game</p>
          <div className="flex flex-col">
            <p className="">
              A simple matching game with pokemon where I used this project to
              try my first very own vercel server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
