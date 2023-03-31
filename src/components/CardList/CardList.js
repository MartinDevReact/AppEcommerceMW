import React from "react";
import "./CardList.css";
import CardArt from "../CardArt/CardArt";
import { Link } from "react-router-dom";


const CardList = ({ listaArticulos }) => {

  return (
    <div className="Cards-List">
      {listaArticulos.map((articulo) => {
        return (
          <div key={articulo.id}>
            <Link to={`/ArtDetail/${articulo.id}`}>
              <CardArt data={articulo} />
            </Link>
          </div>
        );
      })}
    </div>
  );

};

export default CardList;
