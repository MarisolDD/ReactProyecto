import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "./componentes/ActionCart";
const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const estadoInicial = {
  carrito: [],
  itemsEnCarrito: 0,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case TYPES.ADD_TO_CART: {

          return{
            ...state,
            carrito : [...state.carrito, action.value],
            itemsEnCarrito: state.itemsEnCarrito + 1
          }
    }
    case TYPES.ADD_TO_QUANTITY:{
        return {
            ...state,
            carrito: [...state.carrito, action.value],
            itemsEnCarrito: state.itemsEnCarrito + 1
          };
    }
    case TYPES.REMOVE_ITEM: {
      return {
        ...state,
        itemsEnCarrito: state.itemsEnCarrito - 1,
      };
    }
    case TYPES.REMOVE_ALL_ITEM: {
      return {
        ...state,
        itemsEnCarrito: (state.itemsEnCarrito = 0),
      };
    }
    case TYPES.CLEAR_CART: {
      return estadoInicial;
    }
    default:
      return state;
  }
};

const AppProvaider = ({ children }) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const path = "http://localhost:5555/products";
    const cargarProductos = async () => {
      try {
        const res = await axios.get(path);
        console.log(res.data);
        setProducto(res.data);
      } catch (error) {}
    };
    cargarProductos();
  }, []);

  const [state, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <AppContext.Provider
      value={{
        carrito: state.carrito,
        dispatch,
        itemsEnCarrito: state.itemsEnCarrito,
        producto: producto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvaider, useAppContext };
