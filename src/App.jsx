import { useState } from "react";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./App.css";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="bg-bg w-full min-h-screen">
      <div className="p-2 md:flex">
        <div className="w-full md:w-2/5 overflow-y-auto md:fixed">
          <div>
            <Home setPage={setPage} />
          </div>
        </div>

        <div className="w-full md:w-3/5 ml-p">
          <Education />
          <Experiences />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
