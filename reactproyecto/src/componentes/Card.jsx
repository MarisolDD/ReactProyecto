import React from "react";
import "./cards.css";



const Card = ({ id, title, imageSource, url, text}) => {

  return (
    <div className="card-body">
      <div className="card text-center bg- ">
        <img className="img-rounded" src={imageSource} alt="imagen"/>

        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{text}</p>
        <a href={url} target={"_blank"} rel='noreferrer' className="btn btn-lg btn-warning rounded-2">
          Más Info
        </a>
      </div>
    </div>
  );
};

export default Card;
