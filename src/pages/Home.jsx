import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { darkMode } = useGlobalContext();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div
      className={`container mx-auto px-4 py-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
