import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../AppProvaider";

// const Navbar = () => {
//   const { itemsEnCarrito } = useAppContext();

//   return (
//     <div className="container-fluid w-100">
//       <header>
//         <a href="http://localhost:3000/">
//           <div className="logo">
//             <img src={LOGO} alt="logo" width="150" />
//           </div>
//         </a>
//         <ul>
//           <li>
//             <Link to="destinos">DESTINOS</Link>
//           </li>
//           <li>
//             <Link to="grupales">GRUPALES</Link>
//           </li>
//           <li>
//             <Link to="autos">AUTOS</Link>
//           </li>
//           <li>
//             <Link to="seguros">SEGUROS</Link>
//           </li>
//           <li>
//             <Link to="contacto">Contacto</Link>
//           </li>
//         </ul>
//         <div className="cart">
//           <Link to="shoppingCar">
//             <box-icon name="cart"></box-icon>
//             <span className="item_total">{itemsEnCarrito}</span>
//           </Link>
//         </div>

//         <Outlet />
//       </header>
//     </div>
//   );
// };

// export default Navbar;

const NavBar = () => {
  const { itemsEnCarrito } = useAppContext();

  return (
    <header>
      <nav className="navbar navbar-expand-lg w-100 mx-1">
        <div className="container col-lg-10 col-8">
            <div className="container col-lg-3" >
              <a className="nav-bar brand" href="http://localhost:3000/">
                <div className="logo text-center">
                  <img src={LOGO} alt="logo" width="150" />
                </div>
              </a>
            </div>
            <div
              className="collapse navbar-collapse container col-8"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav justify-content-evenly w-100">
                <li>
                  <Link to="destinos" className="nav-link">
                    DESTINOS
                  </Link>
                </li>
                <li>
                  <Link to="grupales" className="nav-link">
                    GRUPALES
                  </Link>
                </li>
                <li>
                  <Link to="autos" className="nav-link">
                    AUTOS
                  </Link>
                </li>
                <li>
                  <Link to="seguros" className="nav-link">
                    SEGUROS
                  </Link>
                </li>
                <li>
                  <Link to="contacto" className="nav-link">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        <div className="cart container col-2 col-lg-1 justify-content-center">
              <Link to="shoppingCar">
                <box-icon name="cart"></box-icon>
                <span className="item_total me-3">{itemsEnCarrito}</span>
              </Link>
            </div>
        <div className="col-1 col-lg-1 mx-2">
          <button
            className="navbar-toggler w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Outlet />
      </nav>
    </header>
  );
};

export default NavBar;
