import { useState } from "react";

const Home = ({ setPage }) => {
  return (
    <div className="PS m-5">
      <p className="text-xl mb-5">LYLE JOHN DUMAYAS</p>
      <p className="text-justify text-base">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="flex flex-col items-start m-8">
        <button className="hover:text-white">Education</button>
        <button
          onClick={() => setPage("EXPERIENCE")}
          className="hover:text-white"
        >
          Experiences
        </button>
        <button className="hover:text-white">Skills</button>
        <button className="hover:text-white">Projects</button>
      </div>
    </div>
  );
};

export default Home;
