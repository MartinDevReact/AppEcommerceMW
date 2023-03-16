import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <h1 style={{ color: "white" }}>Repuestos-MW</h1>
        </li>
        <li>
          <a href="www.MW.com/queVendemos">QUE VENDEMOS</a>
        </li>
        <li>
          <a href="www.MW.com/Servicios">SERVICIOS</a>
        </li>
        <li>
          <a href="www.MW.com/Historia">HISTORIA</a>
        </li>
        <li>
          <a href="www.MW.com/Consultas">CONSULTAS</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;