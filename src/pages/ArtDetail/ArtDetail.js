import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailConteiner from "../../components/ItemDetailConteiner/ItemDetailConteiner"   

const ArtDetail = () => {
  let { id } = useParams();
  return (
    <div>
      <ItemDetailConteiner idArt={id}/>
    </div>   
  );
};

export default ArtDetail;
