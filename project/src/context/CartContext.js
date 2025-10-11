// src/context/CartContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setAddedToCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedToCart));
  }, [addedToCart]);

  const addToCart = (productId) => {
    setAddedToCart((prev) => ({ ...prev, [productId]: true }));
  };

  const cartCount = Object.keys(addedToCart).length;

  return (
    <CartContext.Provider value={{ addedToCart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
