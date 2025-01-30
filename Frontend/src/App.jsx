import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Home from "./components/Home";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
