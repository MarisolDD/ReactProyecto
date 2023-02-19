import React from 'react'

export const ItemCarrito = (data, metodo) => {
    const { id, nombre, precio, cantidad } = data;
    const {deleteFromCart} = metodo;

return (
    <div style={{borderBottom: "thin solid gray"}}>
        <h5>{id}-{nombre} - $ {precio} - {cantidad}u - subtotal: {precio * cantidad}</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
        <br/>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        <br/>
        <h4>{nombre}</h4>
        </div>
    );
}

export default ItemCarrito;