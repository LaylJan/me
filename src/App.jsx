import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import "./App.css";

function App() {
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function goto(link) {
    window.open(link, "_blank");
  }

  const scrollToSection = (section) => {
    switch (section) {
      case "Contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
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
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <div className="p-2 lg:flex">
                <div className="w-full lg:w-2/5 overflow-y-auto lg:fixed">
                  <div>
                    <Home scrollToSection={scrollToSection} goto={goto} />
                  </div>
                </div>

                <div className="w-full lg:w-3/5 ml-p">
                  <div ref={educationRef}>
                    <Education goto={goto} />
                  </div>
                  <div ref={experiencesRef}>
                    <Experiences goto={goto} />
                  </div>
                  <div ref={skillsRef}>
                    <Skills goto={goto} />
                  </div>
                  {/* <div ref={projectsRef}>
                    <Projects goto={goto} />
                  </div> */}
                  <div ref={contactRef}>
                    <Contact goto={goto} />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/certs" element={<Certificates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
