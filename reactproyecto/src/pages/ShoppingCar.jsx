import {TYPES} from "../componentes/ActionCart"
import "./ShoppingCar.css";
import ItemCarrito from "../componentes/ItemCarrito";
import { useAppContext } from "../AppProvaider";

const ShoppingCar = () => {

  const{carrito, dispatch}=useAppContext();
  
  const handleClick = (id, all = false)=>{

    if(all){
      dispatch({
        type: TYPES.REMOVE_ALL_ITEM,
        value:id
      })
    }else{
      dispatch({
        type: TYPES.REMOVE_ITEM,
        value:id
      })
    }

  }

  return (
    <div className="container-fluid" id = "contenedor1">

      <div className="row my-5">
        <div className="row text-center">
          <h2 className="h2">Carrito</h2>
        </div>
        <div className="row">
          <button className="btn btn-dark">
            Limpiar Carrito
          </button>
        </div>
        <div className="row justify-content-center">
          {carrito.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <ItemCarrito
                key={index}
                data={item}
                handleClick={handleClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
