import React from "react";
import "boxicons";
import "./App.css";
import { Footer } from "./componentes/Footer";
import Cards from "./componentes/Cards";
// import "./App.css";
import Carousel from "./componentes/carousel";
import { Body } from "./componentes/Body";
import HeroImage from "./componentes/HeroImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import { Seguros } from "./pages/Seguros";
import CarouselInstagram from "./componentes/CarouselInstagram";
import { Navbar } from "./componentes/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={[
            <Navbar key={1}/>,
            <HeroImage key={2}/>,
            <Cards key={3}/>,
            <Carousel key={4}/>,
            <CarouselInstagram key={5}/>,
            <Body key={6}/>,
            <Footer key={7}/>,
          ]}
        />

        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Seguros" element={<Seguros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



