
import React,{ useReducer} from "react";
import { TYPES } from '../componentes/actioncar';
import { cartInitialState, cartReducer} from '../componentes/cartReducer';
import Producto from "../componentes/Producto";
import ItemCarrito from "../componentes/ItemCarrito";


const ShoppingCar = () => {
    const [state, dispatch]=useReducer(cartReducer, cartInitialState );

    const{ products, cart } = state
    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id });
    };
    const deleteFromCart = (id,all = false) => {
        if(all) {
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCTS, payload: id})
        }
    };
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART});
    };

    return (
        <>
        <div>
            <h1>Carrito de compras</h1>
            <h2>Procutos</h2>
            <article className="box grid-responsive">
            {products.map((producto) =>
            <Producto key={producto.id} data={producto} addToCart={addToCart}/>
            )}
            </article>
            </div>
            <h2>Carrito</h2>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {cart.map((item, index) => (
                <ItemCarrito key={index} data={item} deleteFromCart={deleteFromCart}/>))}
            </article>
            </>
    );
}


export default ShoppingCar;