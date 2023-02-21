import React from "react";

const Producto = ({ data, addToCart }) => {
  let { id, nombre, img, precio } = data;

  return (
    <div className="container-fluid w-25 h-25 border border-success align-content-center p-1">

        <div className="row text-center my-2">
            <h1 className="h1">{nombre}</h1>
        </div>

        <div className="row m-2">
            <img
              src={`assets/${img}`}
              alt="IMAGEN-PRODUCTO"
            />
        </div>

        <div className="row text-center">
            <h2>$ {precio}.00</h2>
        </div>

        <div className="row m-2 p-2">
            <button className="btn bg-dark text-success border my-1" onClick={() => addToCart(id)}>
              Agregar
            </button>
            <button className="btn bg-dark text-success border my-1" onClick={() => addToCart(id)}>Comprar</button>
        </div>
    </div>
  );
};

export default Producto;
