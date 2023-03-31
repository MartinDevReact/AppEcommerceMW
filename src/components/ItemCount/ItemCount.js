import React, { useState } from 'react';
import { Button } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  
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
        className="btn"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Comprar
      </Button>
    </>
  );
};

export default ItemCount;
