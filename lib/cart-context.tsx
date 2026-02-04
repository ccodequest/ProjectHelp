'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Project } from './mock-data';

export interface CartItem {
  project: Project;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (project: Project) => void;
  removeFromCart: (projectId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('projecthelp-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        console.error('Failed to parse saved cart');
      }
    }
    setHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('projecthelp-cart', JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addToCart = (project: Project) => {
    setItems((prevItems) => {
      // Check if project already exists
      const existingItem = prevItems.find((item) => item.project.id === project.id);
      if (existingItem) {
        return prevItems;
      }
      // Add new item
      return [...prevItems, { project }];
    });
  };

  const removeFromCart = (projectId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.project.id !== projectId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
