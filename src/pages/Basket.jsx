
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Basket() {
  const { cart, removeFromCart, updateQuantity } = useGlobalContext();

  if (cart.length === 0) return <h2 className="text-center mt-8">Savat bo'sh</h2>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Savatdagi Mahsulotlar</h2>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, +1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                O'chirish
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
