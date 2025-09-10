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
  const [highlightSkills, setHighlightSkills] = useState(false);
  const [highlightEducation, setHighlightEducation] = useState(false);
  const [highlightExperiences, setHighlightExperiences] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);


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
                    <Home
                      scrollToSection={scrollToSection}
                      goto={goto}
                      setHighlightSkills={setHighlightSkills}
                      highlightSkills={highlightSkills}
                      setHighlightEducation={setHighlightEducation}
                      highlightEducation={highlightEducation}
                      setHighlightExperiences={setHighlightExperiences}
                      highlightExperiences={highlightExperiences}
                      setHighlightContact={setHighlightContact}
                      highlightContact={highlightContact}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-3/5 ml-p pr-10">
                  <div ref={educationRef}>
                    <Education
                      goto={goto}
                      highlight={highlightEducation}
                    />
                  </div>
                  <div ref={experiencesRef}>
                    <Experiences
                      goto={goto}
                      highlight={highlightExperiences}
                    />
                  </div>
                  <div ref={skillsRef}>
                    <Skills goto={goto} highlight={highlightSkills} />
                  </div>
                  {/* <div ref={projectsRef}>
                    <Projects goto={goto} />
                  </div> */}
                  <div ref={contactRef}>
                    <Contact goto={goto} highlight={highlightContact} />
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
