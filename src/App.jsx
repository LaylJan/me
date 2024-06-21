import { useState } from "react";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experiences from "./pages/Experiences";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  /* Set the width of the side navigation to 250px */

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="body">
        <div className="w-2/5">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
