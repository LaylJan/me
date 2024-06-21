import { useState } from "react";

function Home() {
  return (
    <div className="PS m-5">
      <p className="text-2xl mb-5">LYLE JOHN DUMAYAS</p>
      <p className="text-justify text-xl">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="m-8">
        <button className="hover:text-white">About me</button>
        <br />
        <button className="hover:text-white">Experiences</button>
        <br />
        <button className="hover:text-white">Projects</button>
        <br />
        <button className="hover:text-white">Contact me</button>
        <br />
      </div>
    </div>
  );
}

export default Home;