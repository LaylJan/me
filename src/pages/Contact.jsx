import { useState } from "react";
import git from "../assets/github.svg";
import link from "../assets/linkedin.svg";

const Contact = ({ setPage }) => {
  return (
    <div className="font-LS text-justify">
      <p className="text-2xl md:text-3xl font-black">CONTACT:</p>
      <div className="flex mr-2 mb-2 justify-end">
        <button onClick={() => goto("https://github.com/LaylJan")}>
          <img
            src={git}
            className="w-12 hover:bg-white hover:bg-opacity-20 transition duration-200"
            alt=""
          />
        </button>
        {/* <button>
          <img
            src={link}
            className="w-10 hover:bg-white hover:bg-opacity-20 transition duration-200"
            alt=""
          />
        </button> */}
      </div>
    </div>
  );
};

export default Contact;
