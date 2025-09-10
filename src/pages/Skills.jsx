import { useEffect } from "react";

import RJS from "../assets/Reactjs.png";
import WD from "../assets/WD.png";
import MS from "../assets/MS.png";
import PR from "../assets/Programming.png";
import CSS from "../assets/CSS.png";

const Skills = ({ goto, highlight }) => {
  useEffect(() => { }, [highlight]);

  return (
    <div className="font-LS text-justify">
      <p
        className={`text-2xl md:text-3xl font-black mb-4 transition duration-300 ${
          highlight ? "text-green-400 drop-shadow-lg" : "text-white"
        }`}
      >
        SKILLS:
      </p>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={WD} alt="Webdev" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={WD} alt="Webdev" className="w-4 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">Web Development</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Equipped with knowledge and job experience in frontend tasks using{" "}
              JavaScript frameworks such as <b>React</b> and <b>Vue</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={CSS} alt="Webdev" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={CSS} alt="Webdev" className="w-4 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">
              Computer System Servicing
            </p>
          </div>
          <div className="flex flex-col">
            <p className="">
              With basic skills in assembling computers, installing software,
              setting up networks and other common issues.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={MS} alt="Webdev" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={MS} alt="Webdev" className="w-4 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">Computer literate</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Knowledgeable in basic computer tasks and Microsoft Office tools,
              including <b>Word</b>, <b>Excel</b>, and <b>PowerPoint</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-2">
        <img src={PR} alt="Webdev" className="w-24 hidden md:block" />
        <div className="flex flex-col -space-y-1">
          <div className="flex items-center">
            <img src={PR} alt="Webdev" className="w-4 mr-1 -mt-1 md:hidden" />
            <p className="font-bold text-2xl md:text-xl">Programming</p>
          </div>
          <div className="flex flex-col">
            <p className="">
              Advance knowledge on popular programming languages such as{" "}
              <b>Python</b>, <b>Java</b>, and alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
