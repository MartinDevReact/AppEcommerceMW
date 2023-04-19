import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";
import MenuCategory from '../MenuCategory/MenuCategory'
import img from "../../Images/LogoMW_3.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/">
          <img src={img} alt="LogoMW" width="200px" />
        </Link>
        <Link className="Link" to="/">
          ARTICULOS
        </Link>
        <MenuCategory/>  
        <Link className="Link" to="/about">
          QUIENES SOMOS
        </Link>
        <Link className="Link" to="/contact">
          CONTACTO
        </Link>
        <Link className="Link" to="/cart">
          <Shop />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;        

/*
        <li>
          <Shop cantArt={cantArt}/>
        </li>

<li>
  <SelectCategory/>
</li>
*/