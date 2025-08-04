import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalContext";

export default function MainLayout({ children }) {
  const { darkMode } = useGlobalContext();

  // Tanani classini o'zgartirish
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
