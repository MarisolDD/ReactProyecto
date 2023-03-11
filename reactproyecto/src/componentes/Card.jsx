import React from "react";
import "./cards.css";



const Card = ({ id, title, imageSource, url, text}) => {

  return (
    <div className="card-body">
      <div className="card text-center bg- ">
        <img className="img-rounded m-2" src={imageSource} alt="imagen"/>

        <h4 className=" card-title my-3">{title}</h4>
        <h6 className="h6 mx-1 card-text text-secondary">{text}</h6>
        <a href={url} target={"_blank"} rel='noreferrer' className="btn btn-lg btn-warning rounded-2">
          Más Info
        </a>
      </div>
    </div>
  );
};

export default Card;
