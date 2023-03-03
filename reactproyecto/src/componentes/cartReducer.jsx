import { TYPES } from "./actioncar";
import axios from "axios";

export function cartReducer(state, action) {

  const pathCart = 'http://localhost:5555/cart'

  
  const buscarItemCart=async(id)=>{
    try {
      const response = await axios.get(pathCart + `/${id}`);
      let objItem=response.data
      console.log(objItem)
      descontarQuantity(objItem)
    } catch (error) {
      console.log(error.message)
    }
  }

  const descontarQuantity= async(objItem)=>{
    const path = "http://localhost:5555/cart";
    try {
      let obj = { ...objItem, quantity: objItem.quantity - 1 };

      let response = await axios.put(path + `/${objItem.id}`, obj);

      console.log(" se redujo la cantidad del obj" + response.status);
    } catch (error) {
      console.log(error.message);
    }
  }


  switch (action.type) {
    case TYPES.ADD_TO_CART: {

      console.log('cartReducer - add to cart-->', action.payload)
      console.log('state vale--->'+state)
      return {...state, quantity:1}
    
    }
    case TYPES.REMOVE_ONE_FROM_CART: {

      console.log('valor de state--->'+state)

      console.log('cartReducer-remove one from cart '+ action.payload)
      buscarItemCart(action.payload)
      console.log('cartReducer-->descontamos cantidad al producto '+action.payload)
     
      return {...state, quantity:1}
    }
    case TYPES.REMOVE_ALL_ITEM: {
  
      console.log('remove all item '+action.payload)
      break
    }
    case TYPES.CLEAR_CART: {
      return null;
    }
    default:
      return state;
  }
}
