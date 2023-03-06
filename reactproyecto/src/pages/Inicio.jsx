import React from "react";
import HeroImage from "../componentes/HeroImage";
import Cards from "../componentes/Cards";
import Carousel from "../componentes/carousel";
import CarouselInstagram from "../componentes/CarouselInstagram";
import Body from "../componentes/Body";
import Ofertas from "../componentes/Ofertas";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
          <HeroImage />
      </div>
      <div className="row">
        <Ofertas/>
      </div>
      <hr className="w-100"/>
      <div className="row">
          <Cards />
      </div>
      <hr className="w-100"/>
      <div className="row">
          <Carousel />
      </div>
      <hr className="w-100"/>
      <div className="row">
          <CarouselInstagram />
      </div>
      <hr className="w-100"/>
      <div className="row">
          <Body />
      </div>
    </div>
  );
};

export default Inicio;
