import React , { useContext }from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from '../Contexts/CartContext';


const Shop = () => {
  const { cartItems } = useContext(CartContext);

  const quantityCart = () => {
    const cantidadTotal = cartItems.reduce((total, objeto) => {
      return total + objeto.quantity;
    }, 0);  
    return cantidadTotal;
  };

  return (
    <div style={{ display: "flex" }}>
      <AddShoppingCartIcon sx={{ color: "white" }} />
      <span style={{ color: "white" }}>{ quantityCart() }</span>
    </div>
  );

};
export default Shop;