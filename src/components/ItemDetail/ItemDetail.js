import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from  '../Contexts/CartContext';
import "./ItemDetail.css";


const ItemDetail = ({detalleArticulo}) => {

  const { addToCart } = useContext(CartContext);
  const { name, description, price, stock, img } = detalleArticulo;
 
   //console.log(detalleArticulo);

  const onAdd = (cantidad) => {
    //console.log(`Compraste ${cantidad} items`);
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




/*


   <Button
        className="btn"
        //disabled={count === 0 || stock === 0}
        //onClick={() => onAdd(count)}
        onClick={() => <Link className="Link" to="/"></Link>}
      >
        Agregar al carrito
      </Button>

*/