import { useState } from "react";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="bg-black w-full  min-h-screen">
      <div className="flex">
        <div className="w-2/5">
          <div className="">
            <Home setPage={setPage} />
          </div>
        </div>
        <div className="w-3/5 m-10">
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
