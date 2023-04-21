
import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      // Recuperar el estado del carrito del localStorage
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);
  
    useEffect(() => {
      // Actualizar el localStorage cada vez que se cambie el estado del carrito
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (art,quantity) => {
      // Verificar si el producto ya existe en el carrito
      const index = cartItems.findIndex(item => item.id === art.id);
      if (index !== -1) {
        // Actualizar la cantidad del producto existente
        const updatedItems = [...cartItems];
        updatedItems[index].quantity = quantity;
        setCartItems(updatedItems);
        
      } else {
        // Agregar un nuevo objeto al carrito con la cantidad solicitada
        setCartItems([...cartItems, { ...art, quantity }]);
      }
    };
      
    const removeFromCart = (item) => {
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(newCartItems);
    };
    
    const removeAllFromCart = () => {
      setCartItems([]);
    };
    
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeAllFromCart }}>
        {children}
      </CartContext.Provider>
    );
};
