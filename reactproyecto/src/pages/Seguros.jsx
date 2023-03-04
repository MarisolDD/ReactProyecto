import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsSeguros from "../componentes/CardsSeguros";
import imagen from "../images/seguros2.jpg"


const Seguros = () => {
  return (
    <>
    <div className='container-fluid w-40'> 
     <img src={imagen} alt="imagen" className='w-100' id ="imseguros"/>
     </div>
      <CardsSeguros />
      {/* <Footer /> */}
    </>
  );
};

export default Seguros;
