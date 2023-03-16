import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Shop = () => {
  return (
    <div style={{ display: "flex" }}>
      <AddShoppingCartIcon sx={{ color: "white" }} />
      <span style={{ color: "white" }}>5</span>
    </div>
  );
};

export default Shop;