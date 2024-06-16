import { useState } from "react";
import Me from "./pages/Me";
import Journey from "./pages/Journey";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Me />} />
            <Route path="journey" element={<Journey />} />
            <Route path="me" element={<Me />} />
          </Routes>
        </BrowserRouter>
        <p className="button">Journey</p>
        <p className="button">Achievements</p>
      </div>
    </div>
  );
}

export default App;
