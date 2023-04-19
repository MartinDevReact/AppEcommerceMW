import React , { useContext }from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from '../Contexts/CartContext';

const Shop = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ display: "flex" }}>
      <AddShoppingCartIcon sx={{ color: "white" }} />
      <span style={{ color: "white" }}>{ cartItems.length }</span>
    </div>
  );

};
export default Shop;