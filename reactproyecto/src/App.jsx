import React from "react";
import "boxicons";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import Seguros from "./pages/Seguros.jsx"
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Seguros" element={<Seguros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



