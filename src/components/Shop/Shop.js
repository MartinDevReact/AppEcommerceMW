import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Shop = ({cantArt}) => {
  return (
    <div style={{ display: "flex" }}>
      <AddShoppingCartIcon sx={{ color: "white" }} />
      <span style={{ color: "white" }}>{cantArt}</span>
    </div>
  );

};

Shop.defaultProps = {
  cantArt: 1000,
};

export default Shop;