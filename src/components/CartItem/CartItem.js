import React,{useContext} from 'react'
import { Button } from "@mui/material";
import { CartContext } from  '../Contexts/CartContext';

export const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div>
      <ul >
        <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", marginRight: "20px" }}>
            <img src={item.img} alt={item.name} style={{ width: "100px", height: "100px" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{item.name}</div>
            <div>Cantidad: {item.quantity}</div>
            <div>Precio: $ {item.price}</div>
            <Button className="btn" onClick={() => removeFromCart(item)}>
              Eliminar
            </Button>
          </div>
        </li>
      </ul>
      
    </div>
  )
}
export default CartItem;

