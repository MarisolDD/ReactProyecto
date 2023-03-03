import Producto from "./Producto";
import { useAppContext } from "../AppProvaider";
import {TYPES} from "../componentes/ActionCart"

const Ofertas = () => {

  const{producto, carrito, dispatch}=useAppContext()


  const handleClick=(id)=>{

    let nuevoItem = producto.find((e)=>e.id===id)
    nuevoItem.cantidad=1
    
    let itemEnCarro = carrito.find((e)=>e.id===id)

    if(itemEnCarro){
      /*entra solo si el producto si existe en el carrito */
      dispatch({
        type: TYPES.SUMAR_UNO,
        value: itemEnCarro
      })

    }else{
      /*entra solo si el producto no existe en el carrito */
      dispatch({
        type: TYPES.AGREGAR_ITEM,
        value: nuevoItem
      })
    }
  }


  return (
    <div className="container-fluid" id="contenedor1">
      <div className="row">
        <div className="row text-center mt-5">
          <h2 className="h2 mt-5" id="carrito">
            Nuevas Ofertas!!!
          </h2>
        </div>
        <div className="row">
          {producto.map((producto) => (
            <div
              className="col-12 col-md-6 col-xl-3"
              id="productos"
              key={producto.id}
            >
              <Producto
                key={producto.id}
                data={producto}
                handleClick={handleClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
