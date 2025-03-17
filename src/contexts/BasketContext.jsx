import React, { createContext, useState, useContext } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // TODO: what does this function do?
  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const item = prevBasket.find((item) => item.id === product.id);
      if (item) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const removeBasket = (product) => {
    setBasket((prevBasket) => {
      const item = prevBasket.find((item) => item.id === product.id);
      if (item) {
        if (item.quantity === 1) {
          return prevBasket.filter((item) => item.id !== product.id);
        } else {
          return prevBasket.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      }
      return prevBasket;
    });
  };

  // TODO: what does this function do?
  const updateQuantity = (id, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const calculateTotal = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket,removeBasket, updateQuantity, calculateTotal }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
