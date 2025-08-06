import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Basket() {
  const { cart, setCart } = useGlobalContext();
  const updateQuantity = (productId, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + amount;
        return {
          ...item,
          quantity: newQuantity > 1 ? newQuantity : 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6 text-gray-900 dark:text-white min-h-screen dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Savat</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Savat bo‘sh</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={
                    item.product.images && item.product.images.length > 0
                      ? item.product.images[0]
                      : item.product.image
                  }
                  alt={item.product.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.product.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Narxi: ${item.product.price}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-3 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      O‘chirish
                    </button>
                  </div>
                </div>
              </div>

              <p className="font-bold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-4">
            Jami: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
