import React from "react";
import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/Footer";

const Seguros = () => {
  return (
    <>
      <div className="container-fluid w-100">
        <header>
          <a href="http://localhost:3000/">
            <div className="logo">
              <img src={LOGO} alt="logo" width="150" />
            </div>
          </a>
          <ul>
            <li>
              <a href="http://localhost:3000/">DESTINOS</a>
            </li>
            <li>
              <a href="http://localhost:3000/">GRUPALES</a>
            </li>
            <li>
              <a href="http://localhost:3000/">AUTOS</a>
            </li>
            <li>
              <Link to="">Seguros</Link>
            </li>
            <li>
              <Link to="../contacto">Contacto</Link>
            </li>
          </ul>
          <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
          </div>
        </header>
      </div>

      <Footer/>
    </>
  );
};

export default Seguros;
