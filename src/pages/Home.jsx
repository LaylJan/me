import { useState } from "react";
import Webdev from "../assets/Webdev.svg";

const Home = ({ setPage }) => {
  return (
    <div className="m-6 font-ls mt-20 ">
      <p className="text-white text-5xl mb-5 font-black">
        I'M LYLE JOHN DUMAYAS
      </p>
      <div className="m-1">
        <p className="bg-light-blue inline-flex text-black font-semibold pl-2 pr-2 rounded-3xl items-center">
          <img src={Webdev} alt="Web Developer" className="mr-2" />
          Web Developer
        </p>
      </div>
      <p className="text-white text-justify font-semibold text-lg">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="flex flex-col items-start m-8 text-xl font-bold text-white">
        <button className="hover:underline">Education</button>
        <button
          onClick={() => setPage("EXPERIENCE")}
          className="hover:underline"
        >
          Experiences
        </button>
        <button className="hover:underline">Skills</button>
        <button className="hover:underline">Projects</button>
      </div>
    </div>
  );
};

export default Home;
