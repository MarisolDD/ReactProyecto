import React from "react";

export const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div className="container-fluid mt-5 bg-dark text-white rounded p-1">
      <div className="row m-2">
        <h6 className="h6 text-center">
          {id}-{nombre} - ${precio}.00 - {cantidad}u
        </h6>
        <h6 className="h6 text-center">subtotal: $ {precio * cantidad}.00</h6>
      </div>

      <div className="row m-2">
        <button className="btn btn-primary" onClick={() => deleteFromCart(id)}>
          Eliminar uno
        </button>
      </div>
      <div className="row m-2">
        <button
          className="btn btn-primary"
          onClick={() => deleteFromCart(id, true)}
        >
          Eliminar todos
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
