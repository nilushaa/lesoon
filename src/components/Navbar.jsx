import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { cart, darkMode, setDarkMode } = useGlobalContext();
  const totalItems = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <nav
      className={`flex items-center justify-between p-4 shadow ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Link to="/" className="text-2xl font-bold">
        Clothing Shop
      </Link>

      <div className="flex space-x-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-pink-500 font-semibold" : "hover:text-pink-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-pink-500 font-semibold" : "hover:text-pink-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-pink-500 font-semibold" : "hover:text-pink-500"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/basket"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-pink-500 font-semibold"
              : "flex items-center hover:text-pink-500"
          }
        >
          <FaShoppingCart className="mr-1" />
          Savat
          {totalItems > 0 && (
            <span className="ml-1 bg-pink-500 text-white rounded-full px-2 text-xs font-bold">
              {totalItems}
            </span>
          )}
        </NavLink>

       
      </div>
    </nav>
  );
}
