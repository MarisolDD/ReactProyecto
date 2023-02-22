import React from "react";

export const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div className="container-fluid border border-1">
      <div className="row border">
          <h5>
            {id}-{nombre} - $ {precio}.00 - {cantidad}u - subtotal:{" "}
            {precio * cantidad}.00
          </h5>
      </div>

      <div className="row border">
          <button className="btn btn-dark" onClick={() => deleteFromCart(id)}>
            Eliminar uno
          </button>
          <button className="btn btn-dark" onClick={() => deleteFromCart(id, true)}>
            Eliminar todos
          </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
