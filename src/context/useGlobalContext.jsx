import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // 🔄 Savatni localStorage'dan olish
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔄 Dark mode holatini localStorage'dan olish
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false; // Default: false
  });

  // ⏺️ Dark mode o'zgarishini saqlash
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // ⏺️ Savat o'zgarishini saqlash
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ➕ Mahsulotni savatga qo‘shish
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // 🔁 Miqdorni o‘zgartirish
  const updateQuantity = (productId, newQty) => {
    setCart(prev =>
      prev
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(1, newQty) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ❌ Mahsulotni o‘chirish
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
