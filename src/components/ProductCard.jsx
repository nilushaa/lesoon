import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductCard({ product }) {
  const { cart, setCart } = useGlobalContext();

  const isInCart = Array.isArray(cart) && cart.some(item => item.product.id === product.id);

  const addToCart = () => {
    if (!isInCart) {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-2">
        {product.description}
      </p>
      <p className="mt-2 font-bold">${product.price}</p>
      <button
        onClick={addToCart}
     className="mt-3 px-4 py-2 rounded bg-pink-400"
        disabled={isInCart}
      >
        {isInCart ? "Savatda mavjud" : "Savatga qo‘shish"}
      </button>
    </div>
  );
}
