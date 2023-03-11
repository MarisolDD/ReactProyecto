import React from "react";
import "../css/estilos.css";

function HeroImage() {
  return (
    <div className="hero-image justify-content-center align-items-center">
      <div className="hero-text w-75 h-50 align-items-end">
        <h2 className="h2 my-5">
          Viví la <b>aventura</b> de una <b>vida</b>
        </h2>
        <p>
          Con nuestra amplia gama de opciones y un equipo de{" "}
          <b>expertos en viajes</b>, estamos seguros de que encontrarás la
          aventura que buscas. ¡Comienza a soñar con tu próximo viaje{" "}
          <b>hoy mismo</b> con nosotros!
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
