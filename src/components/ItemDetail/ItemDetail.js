import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
const repoImages = require.context('../../Images',true) ;

const ItemDetail = ({ detalleArticulo }) => {
  const { name, description, price, stock, img } = detalleArticulo;
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div className='main-item-detail'>
      <h2>Detalle de: {name}</h2>
      <img src={ repoImages(`./${img}`) } alt={name} style={{ width: '25rem' }} />
      <p>{description}</p>
      <p>${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;

