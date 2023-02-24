import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../css/estilos.css";

const Carousel = () => {
  /**useState para almacenar el arreglo de imagenes que esta en assets */
  const [arreglo, setArreglo] = useState([]);

  /**useEffect para llamada de axios al json-server */
  useEffect(() => {
    const llenarArreglo = async () => {
      try {
        const res = await axios.get("http://localhost:5555/imagen");

        if (res.status === 200) {
          console.log(res.data);
          setArreglo(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    llenarArreglo();
  }, []);

  return (
    // <motion.div className="row my-5 bg-success">
    //   <h1 className="h1 text-center">
    //     Los destinos mas elegidos por nuestros clientes
    //   </h1>
    //   <motion.div
    //     className=" border container-fluid d-flex"
    //     drag="x"
    //     dragConstraints={{ right: 1000, left: -1000 }}
    //   >
    //     {arreglo.map((elemento) => (
    //       <motion.div className="item" key={elemento.id}>
    //         <img
    //           className="img w-100 h-100"
    //           src={`../assets/${elemento.src}`}
    //           alt={elemento.title}
    //         />
    //         <h5 className="h5 text-center">{elemento.title}</h5>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // </motion.div>

    <div className="d-flex justify-content-between align-items-center flex-nowrap">
      {arreglo.map((e, index) => {
        return (
          <div className="col-3 mx-2 bg-warning miTarjeta">
            <img
              src={`../assets/${e.src}`}
              alt="imagen"
              className="miTarjeta"
            />
            <div className="body">
              <h4 className="h4 text-center text-white">{e.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
