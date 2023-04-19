import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Cart = () => {
  const { cartItems } = useContext(CartContext);
 
  const styles = {
    link: {
      color: "red",
      textDecoration: "underline",
    },  
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h2>Su carrito está vacío.</h2> 
          <Link to="/" style={styles.link} >
            <p> Buscar articulos </p>
          </Link>       
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />       
          ))}
          <div>
            <h2>Total: $ {totalPrice}</h2>
            <Button variant="contained" component={Link} to="/CartConfirm" >
            Confirmar Pedido
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
