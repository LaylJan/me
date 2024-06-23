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
      <div className="flex">
        <div className="w-2/5 overflow-y-auto fixed">
          <div>
            <Home setPage={setPage} />
          </div>
        </div>

        <div className="w-3/5 ml-40p">
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
