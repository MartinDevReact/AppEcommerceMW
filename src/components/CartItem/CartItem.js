
import React, { useContext } from 'react';
import { Button, Grid } from '@mui/material';
import { CartContext } from '../Contexts/CartContext';
import './CartItem.css';

export const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <Grid container spacing={2} className="cart-item-container">
      <Grid item xs={1}>
        <div className="image-container">
          <img
            src={item.img}
            alt={item.name}
            className="image"
          />
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="details-container">
          <div className="item-name">{item.name}</div>
          <div className="item-quantity">Cantidad: {item.quantity}</div>
          <div className="item-price">Precio: $ {item.price}</div>
        </div>
      </Grid>
      <Grid item xs={1}>
        <div className="details-container">
           <Button
            variant="contained"
            className="delete-button"
            onClick={() => removeFromCart(item)}
          >
            Eliminar
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default CartItem;
