import React from "react";
import '../css/estilos.css'

import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="http://localhost:3000/" className="nav-link px-2 text-muted">
              DESTINO
            </a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3000/" className="nav-link px-2 text-muted">
              GRUPALES
            </a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3000/" className="nav-link px-2 text-muted">
              AUTOS
            </a>
          </li>
          <li className="nav-item">
            <Link to="seguros" className="nav-link px-2 text-muted">SEGUROS</Link>
          </li>
          <li className="nav-item">

            <Link to="contacto" className="nav-link px-2 text-muted">CONTACTO</Link>

          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2023 Página de contenido académico</p>
        <Outlet/>
      </footer>
    </div>
  );
};

export default Footer;
