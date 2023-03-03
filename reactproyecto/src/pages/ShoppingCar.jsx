import { TYPES } from "../componentes/ActionCart";
import "./ShoppingCar.css";
import ItemCarrito from "../componentes/ItemCarrito";
import { useAppContext } from "../AppProvaider";

const ShoppingCar = () => {
  const { carrito, dispatch } = useAppContext();

  const handleClick = (id, all = false) => {
    if (all) {
      dispatch({
        type: TYPES.QUITAR_ITEM,
        value: id,
      });
    } else {
      dispatch({
        type: TYPES.RESTAR_UNO,
        value: id,
      });
    }
  };

  const handleLimpiarCarrito = () => {
    dispatch({
      type: TYPES.LIMPIAR_CARRITO,
    });
  };

  return (
    <div className="container-fluid" id="contenedor1">
      <div className="row my-5">
        <div className="row text-center">
          <h2 className="h2">Carrito</h2>
        </div>
        <div className="row">
          <button className="btn btn-dark" onClick={handleLimpiarCarrito}>
            Limpiar Carrito
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Finalizar Compra
          </button>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Finalizacion de la Compra</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <p>Gracias por su participacion! </p>
                  <p>Este es un proyecto de estudio.-</p>
                  <p>Usted no ha realizado ninguna compra! </p>
                  <p>Todos los Productos son Ficticios! </p>
                  <p>
                    No debera abonar absolutamente nada por participar de este
                    proyecto.-
                  </p>
                  <p>Muchas Gracias!</p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {carrito.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <ItemCarrito key={index} data={item} handleClick={handleClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
