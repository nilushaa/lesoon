import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

export default function MainLayout({ children }) {
  const { darkMode, setDarkMode, user, logout } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <header className="flex items-center justify-between p-4 shadow-md bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Nilushoping</h1>

        <nav className="flex gap-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/contact">Contact</Link>
          <Link className="hover:underline" to="/basket">Basket</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

         
        </div>
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className={`p-4 text-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
        &copy; 2025 Nilushoping
      </footer>
    </div>
  );
}
