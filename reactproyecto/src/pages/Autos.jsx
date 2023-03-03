import React from 'react'
import imagen from "../images/pagina_en_construccion2.png"


function Autos() {
  return (
    <div className='container-fluid w-50 bg-info'>
      <img src={imagen} alt="imagen" className='w-100' style={{marginTop:'120px'}}/>
    </div>
  )
}

export default Autos