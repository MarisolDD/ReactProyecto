import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/estilos.css";

const CarouselInstagram = () => {
  const [arregloImagen, setArregloImagen] = useState([]);

  /**useEffect para llamar api instagram */
  useEffect(() => {
    let accessToken ='IGQVJYb3duWkswMmJKMFc2ZA0lGOUR1b2tjYWlZATjNaaWQyLVFRZAHdoMjlVOHotWFg3dFFsamZASWmFXRTRnV2dpcERzUEZAWNUYzZAUxUR05mUnhxUUxiVzVkUmotRmVBVTQ2TjlDOUlPcnlya0xpbnZAXWQZDZD'
    let url =
      "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=";
    const cargarPerfilInstagram = async () => {
      try {
        const res = await axios.get(url + accessToken);

        if (res.status === 200) {
          console.log(res.data.data);
          setArregloImagen(res.data.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    cargarPerfilInstagram();
  }, []);

  return (
    <div className="container-fluid d-flex flex-column align-items-center my-5">
        <div className="container my-3">
            <h1 className="h1">
                <a href="https://www.instagram.com/solturismo5555/" target={"_blank"}> Sol Turismo - Instagram </a>
            </h1>
        </div>
      <div
        id="carousel-instagram"
        className="carousel slide miCarouselInstagram"
        data-bs-ride="carousel"
      >
        {/* carousel */}
        <div className="carousel-inner">
          {/* recorremos el arreglo para cargar imagenes en carousel */}
          {arregloImagen.map((elemento, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active" key={elemento.id}>
                  <img
                    src={elemento.media_url}
                    alt="imagen-instagram"
                    className="d-block w-100"
                  />
                </div>
              );
            } else {
              return (
                <div className="carousel-item" key={elemento.id}>
                  <img
                    src={elemento.media_url}
                    alt="imagen-instagram"
                    className="d-block w-100"
                  />
                </div>
              );
            }
          })}
        </div>

        {/* botones left and right */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-instagram"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-instagram"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default CarouselInstagram;
