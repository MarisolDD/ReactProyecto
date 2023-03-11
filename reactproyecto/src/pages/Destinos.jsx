import React from 'react';
import ReactPlayer from "react-player";
import video from "./assets/videos/VOLANDO sobre ARGENTINA en un minuto _ 4K _.mp4";



function Destinos() {
  return (
    <div className='container-fluid d-flex flex-column align-items-around justify-content-around  text-white text-center' style={{height:'100vh', width:'100vw'}}>
    <div className='row' style={{height:'13%', width:'100%'}}> 
    </div>
    <div className='row text-warning mt-5'>
      <h5>Conozca más al respecto de nuestras promociones por multidestino y acumulación de millas aéreas </h5>
    </div>

    <div className='row mx-auto d-block h-75'>
      <ReactPlayer url={video} controls loop   volume={0.1} width='100%' height='100%'/>
    </div>
       

  </div>

  )
}

export default Destinos