import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from  '../Contexts/CartContext';
import "./ItemDetail.css";

const ItemDetail = ({detalleArticulo}) => {

  const { addToCart } = useContext(CartContext);
  const { name, description, price, stock, img } = detalleArticulo;

  const onAdd = (cantidad) => {
    addToCart(detalleArticulo, cantidad);
  };

  return (
    <div className='main-item-detail'>
        
      <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{ width: '25rem' }} />
      <p>{description}</p>
      <p>${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />

    </div>
  );
};

export default ItemDetail;
