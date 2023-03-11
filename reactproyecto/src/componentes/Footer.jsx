import React from "react";
import "../css/estilos.css";

import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container-fluid w-100">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="destinos" className="nav-link text-muted">
              DESTINOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="grupales" className="nav-link text-muted">
              GRUPALES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="autos" className="nav-link text-muted">
              AUTOS
            </Link>
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
        <p className="text-center text-muted">
          &copy; 2023 Página de contenido académico
        </p>
        <Outlet />
      </footer>
    </div>
  );
};

export default Footer;
