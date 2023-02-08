import React, { useEffect, useState } from "react";
import axios from "axios"


const Carousel =()=>{

    /**useState para almacenar el arreglo de imagenes que esta en assets */
    const [arreglo, setArreglo]=useState([])

    /**useEffect para llamada de axios al json-server */
    useEffect(()=>{

        const llenarArreglo = async ()=>{

            try {
                const res = await axios.get("http://localhost:5555/imagen")

                if(res.status===200){
                    
                    console.log(res.data)
                    setArreglo(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        llenarArreglo();

    },[])

    return(
        <div className="carousel slide miCarousel" data-bs-ride="carousel" id="miCarousel">


            {/* carousel contenedor */}
            <div className="carousel-inner">

                {/* los item del carousel se llenan mapeando el arreglo */}
                {
                    arreglo.map((elemento, index)=>{

                        if(index===0){

                            return(
                                <div className="carousel-item active" key={index+1}>
                                    <img src={`../assets/${elemento.src}`} alt={elemento.title} className="d-block w-100 border p-1"></img>
                                </div>
                            )

                        }else{

                            return(
                                <div className="carousel-item" key={index+1}>
                                    <img src={`../assets/${elemento.src}`} alt={elemento.title} className="d-block w-100 border p-1"></img>
                                </div>
                            )

                        }//if-else
                    })//map
                }

            </div>


            {/* botones del carousel */}
            <button className="carousel-control-prev" type="button" data-bs-target="#miCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#miCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    )
}

export default Carousel