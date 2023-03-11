import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsSeguros from "../componentes/CardsSeguros";
import imagen from "../images/seguros2.jpg"


const Seguros = () => {
  return (
    <>
    <div className='container-fluid w-100 pt-5'> 
     <img src={imagen} alt="imagen" className='w-100 mt-5 pt-2' id ="imseguros"/>
     </div>
      <CardsSeguros />
      {/* <Footer /> */}
    </>
  );
};

export default Seguros;
