import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const Home = () => {
  return (
    <div>
      <ItemListContainer greeting='Seleccione el articulo que desea agregar al carrito de compras....'/>
    </div>
  );
};

export default Home;
