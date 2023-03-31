import React, { useEffect, useState } from 'react';
import { getArticulos } from '../../mock/FakeApiArticulos';
import CardList from '../CardList/CardList';

const ItemListContainer = ({ greeting }) => {
  const [listaArticulos, setListaArticulos] = useState([]);

  useEffect(() => {
    getArticulos()
      .then((res) => setListaArticulos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <CardList listaArticulos={listaArticulos}/>
    </div>
  );
};

export default ItemListContainer;

