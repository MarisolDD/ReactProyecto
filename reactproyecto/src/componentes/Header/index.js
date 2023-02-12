import React from "react";
import LOGO from "../../images/Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "../Contacto";
import { Link } from "react-router-dom";
import 'boxicons';

export const Header = () => {
    return (
        <header>
            <a href="http://localhost:3000/">
                <div className="logo">
                    <img src={LOGO} alt="logo" width="150"/>
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
                    <a href="http://localhost:3000/">SEGUROS</a>
                </li>
                <li>
                    <Link to="../Contacto">Contacto</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>

    )
}

