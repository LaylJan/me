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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="journey" element={<Journey />} />
            <Route path="me" element={<Me />} />
          </Routes>
        </BrowserRouter>
        <button className="PS w-96 hover:text-white" onClick={openNav}>
          For more information click me
        </button>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
