import React from 'react'
import imagen from "../images/pagina_en_construccion2.png"


function Autos() {
  return (
    <div className="container-fluid d-flex flex-column pt-5">

    <div className="row col bg-info justify-content-center align-items-center">
      <img
        src={imagen}
        alt="imagen"
        className="w-50 pt-5"
        style={{objectFit:'cover'}}
      />
    </div>

  </div>
  )
}

export default Autos