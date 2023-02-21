import React from 'react'


const Producto = ({ data, addToCart }) => {
    let { id, nombre, img, precio } = data;


return (
    <div style={{border: "thin solid gray" ,padding: "1rem"}}>
        <h4>{nombre}</h4>
        <img alt="Imagen-Producto" src={img}></img>
        <img src={`../images/${img}`} alt=" otra imagen" style={{width:`500px`, height:`500px`, border: `solid 1px black`}}/>
        <h5>$ {precio}.00</h5>
        <button className='product-btn' onClick={() => addToCart(id)}>Agregar</button>
        <button onClick={() =>addToCart(id)}>Comprar</button>
        <h4 className="h4">{`../images/${img}`}</h4>
    </div>
    );
};

export default Producto;
