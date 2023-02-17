import React from "react";
import Navbar from "../componentes/Navbar";
import HeroImage from "../componentes/HeroImage";
import Cards from "../componentes/Cards";
import Carousel from "../componentes/Carousel";
import CarouselInstagram from "../componentes/CarouselInstagram";
import Body from "../componentes/Body";
import Footer from "../componentes/Footer";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <div className="row">
          <Navbar />
      </div>
      <div className="row ">
          <HeroImage />
      </div>
      <div className="row">
          <Cards />
      </div>
      <div className="row">
          <Carousel />
      </div>
      <div className="row">
          <CarouselInstagram />
      </div>
      <div className="row">
          <Body />
      </div>
      <div className="row">
          <Footer />
      </div>
    </div>
  );
};

export default Inicio;
