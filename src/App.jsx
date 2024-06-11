import { useState } from "react";
import Me from "./pages/Me";
import Journey from "./pages/Journey";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="journey" element={<Journey />} />
          <Route path="me" element={<Me />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
