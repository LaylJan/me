import { useState } from "react";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Journey from "./pages/Journey";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
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
      </div>
    </div>
  );
}

export default App;
