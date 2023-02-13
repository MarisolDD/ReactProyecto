import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import "./App.css";
import { Footer } from "./componentes/Footer";
import Cards from "./componentes/Cards";
import "./App.css";
import Carousel from "./componentes/carousel";
import { Body } from "./componentes/Body";
import HeroImage from "./componentes/HeroImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={[
            <Header key={1}/>,
            <HeroImage key={2}/>,
            <Cards key={3}/>,
            <Carousel key={4}/>,
            <Body key={5}/>,
            <Footer key={6}/>,
          ]}
        />

        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**   {/* <div className="App h-100"> */

/* <div className="row">
        <Header className="header" />
      </div> */

/* <div className="row">
        <HeroImage/>
      </div> */

/* <div className="row mt-5">
        <Cards />
      </div> */

/* <div className="row my-5">
        <Carousel />
      </div> */

/* <div className="row h-50 m-5">
        <Body />
      </div> */

/* <div className="row">
        <Footer />
      </div> */

/* </div> */
