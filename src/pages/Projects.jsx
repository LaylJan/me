import { useEffect } from "react";
import next from "../assets/next.svg";

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

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl font-bold text-white">
            Graphic Design Projects
          </p>

          <p className="text-base md:text-lg text-white/80">
            Samples of graphic design projects, including posters, logos, and
            other visual materials created for various purposes, showcasing
            creativity and design skills. These projects demonstrate the ability
            to create visually appealing and effective designs for different
            audiences and contexts.
          </p>

          <button
            type="button"
            onClick={() => goto && goto("")}
            className="ml-auto inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white font-semibold transition duration-300 hover:bg-pink-500 hover:border-pink-500"
          >
            <span className="mr-2">View Samples</span>
            <img src={next} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
