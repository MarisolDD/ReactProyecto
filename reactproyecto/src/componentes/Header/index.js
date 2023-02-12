import React from "react";
import LOGO from "../../images/Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "../Contacto";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={LOGO} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">DESTINOS</a>
                </li>
                <li>
                    <a href="#">GRUPALES</a>
                </li>
                <li>
                    <a href="#">AUTOS</a>
                </li>
                <li>
                    <a href="#">SEGUROS</a>
                </li>
                <li>
                    <Link to={'../Contacto.js'}>Contacto</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>

    )
}

