import React from 'react'

export const ItemCarrito = ({data, deleteFromCart}) => {
    const { id, nombre, precio, cantidad } = data;

return (
    <div style={{borderBottom: "thin solid gray"}}>
        <h5>{id}-{nombre} - $ {precio}.00 - {cantidad}u - subtotal: {precio * cantidad}.00</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
        <br/>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        <br/>
        <br/>
        </div>
    );
}

export default ItemCarrito;