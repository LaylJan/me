import { useState } from "react";

const Home = ({ setPage }) => {
  return (
    <div className="PS m-5">
      <p className="text-2xl mb-5">LYLE JOHN DUMAYAS</p>
      <p className="text-justify text-xl">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="m-8">
        <button onClick={() => setPage("ME")} className="hover:text-white">
          About me
        </button>
        <br />
        <button
          onClick={() => setPage("EXPERIENCE")}
          className="hover:text-white"
        >
          Experiences
        </button>
        <br />
        <button className="hover:text-white">Projects</button>
        <br />
        <button className="hover:text-white">Contact me</button>
        <br />
        <button className="hover:text-white">Education</button>
      </div>
    </div>
  );
};

export default Home;
