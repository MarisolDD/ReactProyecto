import React from 'react'

const Producto = ({ data, addToCart }) => {
    let { id, nombre, img, precio } = data;


return (
    <div style={{border: "thin solid gray" ,padding: "1rem"}}>
        <h4>{nombre}</h4>
        <img style={{ maxWidth: 80 }} img={img} alt=""></img>
        <h5>$ {precio}</h5>
        <button className='product-btn' onClick={() => addToCart(id)}>Agregar</button>
        <button onClick={() =>addToCart(id)}>Comprar</button>
    </div>
    );
};

export default Producto;
