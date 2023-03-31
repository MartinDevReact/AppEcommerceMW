import React from "react";
import "./Header.css";


const Header = ({ title }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "Bienvenido a la casa de los repuestos!",
};

export default Header;


    
