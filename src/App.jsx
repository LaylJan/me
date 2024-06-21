import { useState } from "react";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experiences from "./pages/Experiences";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="bg-black w-full  min-h-screen">
      <div className="flex">
        <div className="w-2/5">
          <Home setPage={setPage} />
        </div>
        <div className="w-3/5 m-10">
          {page === "ME" ? (
            <Me />
          ) : page === "EXPERIENCE" ? (
            <Experiences />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
