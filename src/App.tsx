import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
