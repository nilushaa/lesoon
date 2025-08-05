import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductCard({ product, darkMode }) {
  const { addToCart } = useGlobalContext();

  return (
    <div
      className={`flex flex-col justify-between rounded-lg p-4 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm mb-2">{product.description}</p>
        <div className="font-bold text-green-500 mb-4">${product.price}</div>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="block mx-auto bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Savatga qo‘shish
        </button>
      </div>
    </div>
  );
}
