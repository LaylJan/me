import { useState } from "react";
import git from "../assets/github.svg";
import link from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import copy from "../assets/copy.svg";
import resumeLink from "../assets/resume.pdf";

const Contact = ({ goto }) => {
  const [showMessage, setShowMessage] = useState(false);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // Hide the message after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="font-LS text-justify mb-10">
      <p className="text-2xl md:text-3xl font-black">CONTACT INFO:</p>
      <div>
        <p className="flex font-bold text-base md:text-xl">
          layljandee@gmail.com
          <button
            onClick={() => copyText("layljandee@gmail.com")}
            className="ml-1 hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <img src={copy} className="p-1 -mt-1" alt="" />
          </button>
          {showMessage && (
            <div className="popup-message">Copied to clipboard!</div>
          )}
        </p>
        <p className="flex font-bold text-base md:text-xl">
          09309972143
          <button
            onClick={() => copyText("09309972143")}
            className="ml-1 hover:bg-white hover:bg-opacity-20 transition duration-200"
          >
            <img src={copy} className="p-1 -mt-1" alt="" />
          </button>
        </p>
      </div>
      <div className="flex mr-2 mb-2 justify-center md:justify-start">
        <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() => goto("https://github.com/LaylJan")}
        >
          <img src={git} className="w-12" alt="" />
          <p className="font-bold text-2xl">Github</p>
        </button>
        <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() =>
            goto("https://www.linkedin.com/in/lyle-john-dumayas-10528a317")
          }
        >
          <img src={link} className="w-12" alt="" />
          <p className="font-bold text-2xl">Linkedin</p>
        </button>
        <button
          className="flex p-1 items-end hover:bg-white hover:bg-opacity-20 transition duration-200"
          onClick={() => goto(resumeLink)}
        >
          <img src={resume} className="w-12" alt="" />
          <p className="font-bold text-2xl">Resume</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
