"use client";

// react hooks
import { createContext, useState, useContext, ReactNode } from "react";

// types
import { CartContextType, CartItem } from "@/types";

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // searchs if item is in already in cart
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);

      // if the item is already in the cart, update its quantity.
      // use the 'map' method to create a new array with the updated cart items.
      // for the item that matches the given 'id', increment its quantity by 1.
      // all other items remain unchanged.
      if (itemInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // if the item is not already in the cart, add it as a new item.
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // fix
  const updateQuantity = (id: number, quantity: number) => {};

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
