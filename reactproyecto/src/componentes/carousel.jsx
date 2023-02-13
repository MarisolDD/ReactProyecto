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
    <motion.div className="container-fluid border">
      <motion.div
        className="container-fluid d-flex p-1 mx-2"
        drag="x"
        dragConstraints={{ right: 900, left: -900 }}
      >
        {arreglo.map((elemento) => (
          <motion.div
            className="item border border-warning border-1 m-2"
            key={elemento.id}
          >
            <img
              className="img-fluid w-100 h-100"
              src={`../assets/${elemento.src}`}
              alt={elemento.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
