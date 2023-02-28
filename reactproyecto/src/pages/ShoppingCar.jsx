import React, { useReducer } from "react";
import { TYPES } from "../componentes/actioncar";
import "./ShoppingCar.css";
import { cartInitialState, cartReducer } from "../componentes/cartReducer";
import Producto from "../componentes/Producto";
import ItemCarrito from "../componentes/ItemCarrito";
import axios  from 'axios'


const ShoppingCar = () => {

  const path='http://localhost:5555/cart'

  const guardarNewItem = async (item) => {
    try {
      item.quantity=1
      const response = await axios.post(path,item)
      console.log('guardamos item en carrito '+ response.status)

    } catch (error) {
      console.log('el item ya esta guardado en el carrito '+error)
    }
  }

  const agregarCantidad=async(item)=>{
    try {
      const obj = {...item, quantity:item.quantity+1}

      const response = await axios.put(path+`/${item.id}`, obj)

      console.log(' se modifico la cantidad del obj' + response.status)
    } catch (error) {
      console.log(error.message)
    }
  }

  const procesarItem=async(item)=>{
    try {
      const response = await axios.get(path+`/${item.id}`)
      agregarCantidad(response.data)
      console.log('buscarItemInCart '+response.status)
    } catch (error) {
      guardarNewItem(item)
      console.log("el producto no existe en el carrito "+error)
    }
  }

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

    let newItem = products.find((e)=>e.id === id)

    newItem.quantity=1

    procesarItem(newItem)

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
