import { TYPES } from "./actioncar";
// import Producto from "./Producto";

export const cartInitialState = {
  products: [
    {
      id: 1,
      nombre: "Alquiler auto",
      precio: 10000,
      img: {},
    },
    {
      id: 2,
      nombre: "Alojamiento",
      precio: 8000,
      img: {},
    },
    {
      id: 3,
      nombre: "Excursiones",
      precio: 10000,
      img: {},
    },
    {
      id: 4,
      nombre: "Vuelos cortos",
      precio: 85000,
      img: {},
    },
  ],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let nuevoItem = state.products.find(
        (products) => products.id === action.payload
      );

      let ItemCarrito = state.cart.find((item) => item.id === nuevoItem.id);

      return ItemCarrito
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === nuevoItem.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...nuevoItem, cantidad: 1 }],
          };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    /**aca iria case TYPES.REMOVE_ALL_FROM_CART: */
    case TYPES.REMOVE_ALL_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    /**aca iria case TYPES.CLEAR_CART: */
    case TYPES.CLEAR_CART:
      return cartInitialState;

    default:
      return state;
  }
}
