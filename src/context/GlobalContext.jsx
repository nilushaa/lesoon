import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [cart, setCart] = useState([]); // cart har doim massiv bo'lishi kerak
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        darkMode,
        setDarkMode,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
            