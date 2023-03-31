import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";
import img from "../../Images/LogoMW_3.png";
import { Link } from "react-router-dom";

const NavBar = ({cantArt}) => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/">
          <img src={img} alt="LogoMW" width="200px" />
        </Link>
        <Link className="Link" to="/">
          Ver Articulos
        </Link>
        <Link className="Link" to="/about">
          Quienes Somos
        </Link>
        <Link className="Link" to="/contact">
          Contactos
        </Link>
        <li>
          <Shop cantArt={cantArt}/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;