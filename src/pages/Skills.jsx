import { useEffect } from "react";

import RJS from "../assets/Reactjs.png";
import WD from "../assets/WD.png";
import MS from "../assets/MS.png";
import PR from "../assets/Programming.png";
import CSS from "../assets/CSS.png";

const defaultSkills = [
  {
    id: "css",
    title: "IT Support",
    icon: CSS,
    description: (
      <>
        Skilled in maintaining systems, organizing technical workflows, and supporting daily IT operations.
      <div className="mt-1"><b>•Hardware Troubleshooting •Software Installation •Windows •Networking Basics •System Maintenance</b></div>
      </>
    ),
  },
  {
    id: "ms",
    title: "Computer Literacy",
    icon: MS,
    description: (
      <>
        Proficient in using computers, online platforms, and digital tools for productivity and technical tasks.
      <div className="mt-1"><b>•Microsoft Office •Google Workspace •File Management •Internet Research •Email Management</b></div>
      
      </>
    ),
  },
   {
    id: "css",
    title: "Technical Support",
    icon: CSS,
    description: (
      <>
        Experienced in troubleshooting technical issues and assisting users with software, systems, and device concerns.
      <div className="mt-1"><b>• Troubleshooting • Remote Assistance • System Support • Ticket Handling • Technical Assistance</b></div>
      </>
    ),
  },
  {
    id: "pr",
    title: "Programming",
    icon: PR,
    description: (
      <>
        Advance knowledge on popular programming languages such as <b>Python</b>,
        <b>Java</b>, and alike.
      </>
    ),
  },
  {
    id: "wd",
    title: "Web Development",
    icon: WD,
    description: (
      <>
        Equipped with knowledge and job experience in frontend tasks
        <div className="mt-1"><b>• REACT • HTML • CSS • JavaScript</b></div>
      </>
    ),
  },
];

const Skills = ({ goto, highlight, skills = defaultSkills }) => {
  useEffect(() => {}, [highlight]);

  return (
    <div className="font-LS text-justify">
      <p
        className={`text-2xl md:text-3xl font-black mb-4 transition duration-300 ${
          highlight ? "text-green-400 drop-shadow-lg" : "text-white"
        }`}
      >
        SKILLS:
      </p>

      {skills.map((s) => (
        <div
          key={s.id || s.title}
          className="group flex text-base md:text-xl font-medium mt-2 mb-5 md:ml-5 items-center md:space-x-5 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-white/10"
        >
          {s.icon && <img src={s.icon} alt={s.title} className="w-24 hidden md:block" />}
          <div className="flex flex-col -space-y-1">
            <div className="flex items-center">
              {s.icon && <img src={s.icon} alt={s.title} className="w-4 mr-1 -mt-1 md:hidden" />}
              <p className="font-bold text-2xl md:text-xl">{s.title}</p>
            </div>
            <div className="flex flex-col">
              <p className="">{s.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
