import { useState } from "react";

const Projects = ({ setPage }) => {
  return (
<div className="font-LS text-justify">
      <p className="text-3xl font-black">PROJECTS:</p>
      <div className="flex text-xl font-medium mt-2 mb-5 ml-5 items-center space-x-5 p-2 hover:bg-white hover:bg-opacity-50 transition duration-300">
        <img src={""} alt="IntelliSeven" className="w-32" />
        <div className="flex flex-col">
          <p className="font-bold">Flip-Game</p>
          <div className="flex flex-col">
            <p className="">A simple matching game with pokemon where I used this project to try my first very own vercel server.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
