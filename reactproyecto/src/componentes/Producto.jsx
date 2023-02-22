import React from "react";

const Producto = ({ data, addToCart }) => {
  let { id, nombre, img, precio } = data;

  return (
    <div className="container border border-success w-100 h-100 my-4">

        <div className="row text-center">
            <h3 className="h3">{nombre}</h3>
        </div>

        <div className="row">
            <img
              src={`assets/${img}`}
              alt="IMAGEN-PRODUCTO"
            />
        </div>

        <div className="row text-center">
            <h3 className="h3">$ {precio}.00</h3>
        </div>

        <div className="row m-1">
            <button className="btn bg-dark text-white rounded-pill m-1" onClick={() => addToCart(id)}>
              Agregar
            </button>
            <button className="btn bg-dark text-white rounded-pill m-1" onClick={() => addToCart(id)}>Comprar</button>
        </div>
    </div>
  );
};

export default Producto;
