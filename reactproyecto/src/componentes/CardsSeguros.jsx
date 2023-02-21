import React from "react";
import Card from "./Card";

import image1 from "../images/iguazu.jpeg";
import image2 from "../images/bariloche.jpeg";
import image3 from "../images/jujuy.jpeg";

const cards = [
  {
    id: 1,
    title: "Assist Card",
    image: image1,
    url: "https://misiones.tur.ar/iguazu/",
    text: "ASSIST-CARD  ha diseñado diferentes productos de asistencia adecuados para Viajeros de Placer  y Viajeros de Negocios.",
  },
  {
    id: 2,
    title: "Bariloche",
    image: image2,
    url: "https://barilocheturismo.gob.ar/es/home",
    text: "$45.000",
  },
  {
    id: 3,
    title: "Jujuy",
    image: image3,
    url: "http://www.turismo.jujuy.gob.ar/",
    text: "$48.000",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="row mt-4">
        {cards.map((card) => (
          <div className="col-md-3" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              text={card.text}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;