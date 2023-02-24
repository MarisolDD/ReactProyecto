import React from "react";
import HeroImage from "../componentes/HeroImage";
import Cards from "../componentes/Cards";
import Carousel from "../componentes/carousel";
import CarouselInstagram from "../componentes/CarouselInstagram";
import Body from "../componentes/Body";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
          <HeroImage />
      </div>
      <div className="row">
          <Cards />
      </div>
      <div className="row bg-dark">
          <Carousel />
      </div>
      <div className="row">
          <CarouselInstagram />
      </div>
      <div className="row">
          <Body />
      </div>
    </div>
  );
};

export default Inicio;
