import React from "react";
import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import "../css/estilos.css";

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

      <div className="footer-container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                href="http://localhost:3000/"
                className="nav-link px-2 text-muted"
              >
                DESTINO
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://localhost:3000/"
                className="nav-link px-2 text-muted"
              >
                GRUPALES
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://localhost:3000/"
                className="nav-link px-2 text-muted"
              >
                AUTOS
              </a>
            </li>
            <li className="nav-item">
              <Link to="seguros" className="nav-link px-2 text-muted">
                SEGUROS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacto" className="nav-link px-2 text-muted">
                CONTACTO
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
          <Outlet />
        </footer>
      </div>
    </>
  );
};

export default Seguros;
