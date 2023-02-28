import { TYPES } from "./actioncar";

export const cartInitialState = {
  products: [
    {
      id: 1,
      nombre: "Alquiler auto",
      precio: 10000,
      img: "rencar.jpg",
    },
    {
      id: 2,
      nombre: "Alojamiento",
      precio: 8000,
      img: "alojamiento.jpg",
    },
    {
      id: 3,
      nombre: "Excursiones",
      precio: 10000,
      img: "paquetes.jpg",
    },
    {
      id: 4,
      nombre: "Vuelos cortos",
      precio: 85000,
      img: "vuelos.jpg",
    },
  ],
  cart: [],
};
export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const nuevoItem = state.products.find(
        (producto) => producto.id === action.payload
      );
      const itemCarrito = state.cart.find((item) => item.id === action.payload);

      return itemCarrito
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
    case TYPES.REMOVE_ALL_FROM_CART:
    case TYPES.REMOVE_ALL_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return cartInitialState;
    }
    default:
      return state;
  }
}
