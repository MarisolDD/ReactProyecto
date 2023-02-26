import React, { useReducer } from "react";
import { TYPES } from "../componentes/actioncar";
import "./ShoppingCar.css";
import { cartInitialState, cartReducer } from "../componentes/cartReducer";
import Producto from "../componentes/Producto";
import ItemCarrito from "../componentes/ItemCarrito";

const ShoppingCar = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEM, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCTS, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div className="container-fluid" id = "contenedor1">
      <div className="row">
        <div className="row text-center mt-5">
          <h2 className="h2 mt-5" id = "carrito">Carrito de compras</h2>
          <h3 className="h3" >Productos</h3>
        </div>
        <div className="row">
          {products.map((producto) => (
            <div className="col-12 col-md-6 col-xl-3" id ="productos" key={producto.id}>
    
              <Producto
                key={producto.id}
                data={producto}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="row my-5">
        <div className="row text-center">
          <h2 className="h2">Carrito</h2>
        </div>
        <div className="row">
          <button className="btn btn-dark" onClick={clearCart}>
            Limpiar Carrito
          </button>
        </div>
        <div className="row justify-content-center">
          {cart.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <ItemCarrito
                key={index}
                data={item}
                deleteFromCart={deleteFromCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
