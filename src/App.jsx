import { useState } from "react";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Journey from "./pages/Journey";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("asddas");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="body">
        <div className="w-1/2">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
