import React from 'react';
import ReactPlayer from "react-player";
import video from "./assets/videos/VOLANDO sobre ARGENTINA en un minuto _ 4K _.mp4";



function Destinos() {
  return (
 
    <div className=''>
    <ReactPlayer url={video} controls loop muted volume={1} width="100%" height="90%"/>
       
    <h3>Conozca más al respecto de nuestras promociones por multidestino y acumulación de millas aéreas </h3>
  </div>

  )
}

export default Destinos