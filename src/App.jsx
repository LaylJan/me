import { useState, useRef } from "react";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./App.css";

function App() {
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  function goto(link) {
    window.open(link, "_blank");
  }

  const scrollToSection = (section) => {
    switch (section) {
      case "Education":
        educationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experiences":
        experiencesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-bg w-full min-h-screen">
      <div className="p-2 md:flex">
        <div className="w-full md:w-2/5 overflow-y-auto md:fixed">
          <div>
            <Home scrollToSection={scrollToSection} />
          </div>
        </div>

        <div className="w-full md:w-3/5 ml-p">
          <div ref={educationRef}>
            <Education goto={goto} />
          </div>
          <div ref={experiencesRef}>
            <Experiences goto={goto} />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
