import React from 'react'
import video from "./assets/video autos rent car.mp4";
import ReactPlayer from "react-player";

function Autos() {
  return (
    <div className="container-fluid d-flex flex-column pt-5">

    <div className="row col bg-info justify-content-center align-items-center">
    <ReactPlayer url={video} controls loop   volume={0.1} width='100%' height='100%'/>
    </div>

  </div>
  )
}

export default Autos