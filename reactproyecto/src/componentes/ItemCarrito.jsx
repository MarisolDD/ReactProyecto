import React from "react";

export const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h5>
        {id}-{nombre} - $ {precio}.00 - {cantidad}u - subtotal:{" "}
        {precio * cantidad}.00
      </h5>

      <button className="btn btn-dark" onClick={() => deleteFromCart(id)}>
        Eliminar uno
      </button>

      <button className="btn btn-dark" onClick={() => deleteFromCart(id, true)}>
        Eliminar todos
      </button>
    </div>
  );
};

export default ItemCarrito;
