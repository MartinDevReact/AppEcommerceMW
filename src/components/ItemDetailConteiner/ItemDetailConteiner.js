import React, { useEffect, useState } from 'react';
import { getArticulos } from '../../mock/FakeApiArticulos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spiner from '../Spinner/Spinner'

const ItemDetailContainer = ({idArt}) => {
 
  const [detalleArticulo, setDetalleArticulo] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getArticulos()
      .then((res) => setDetalleArticulo(res.find((item) => item.id === idArt)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idArt]);

  return (
    <div>
      {loading ? <Spiner /> : <ItemDetail detalleArticulo={detalleArticulo} />}
    </div>
  );

};

export default ItemDetailContainer;