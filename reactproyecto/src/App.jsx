import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import logo from "../src/images/Logo.jpg";
import "./App.css";
import { Footer } from "./componentes/Footer";
import Cards from "./componentes/Cards";
import "./App.css";
import Carousel from "./componentes/carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "./componentes/Contacto.js";
import { Body } from "./componentes/Body";
import HeroImage from "./componentes/HeroImage";

function App() {
  return (
    <div className="App h-100">

      <div className="row">
        <Header className="header" />
      </div>

      <div className="row">
        <HeroImage/>
      </div>

      <div className="row mt-5">
        <Cards />
      </div>

      <div className="row my-5">
        <Carousel />
      </div>

      <div className="row h-50 m-5">
        <Body />
      </div>

      <div className="row">
        <Footer />
      </div>

    </div>
  );
}

export default App;
