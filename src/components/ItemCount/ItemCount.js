import React, { useState } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  

  const styles = {
    link: {
      color: "White",
      textDecoration: "underline"
    },  
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div>
        <Button className="btn" onClick={restar}>
          -
        </Button>
        <span className="btn">{count}</span>
        <Button className="btn" onClick={sumar}>
          +
        </Button>
      </div>
      <Button
        variant="outlined"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Agregar al Carrito
      </Button>
      <div >
          <Link to="/" style={styles.link} >
            <p > Buscar articulos </p>
          </Link>       
      </div>
    </>
  );
};

export default ItemCount;
