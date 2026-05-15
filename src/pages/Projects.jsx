import { useState } from "react";
import { useEffect } from "react";
import flip from "../assets/flip-game.png";
import calcu from "../assets/Calculator App.png";
import cs50 from "../assets/CS50.png";

const Projects = ({ goto, highlight }) => {
  useEffect(() => {}, [highlight]);
  return (
    <div className="font-LS text-justify">
      <p
        className={`text-2xl md:text-3xl font-black transition duration-300 ${
          highlight ? "text-pink-400 drop-shadow-lg" : "text-white"
        }`}
      >
        PROJECTS:
      </p>
     
     
    </div>
  );
};

export default Projects;
