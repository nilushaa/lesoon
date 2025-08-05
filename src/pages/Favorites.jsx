    import React from "react";
    import { useGlobalContext } from "../context/GlobalContext";
    import ProductCard from "../components/ProductCard";

    export default function Favorites() {
    const { favorites } = useGlobalContext();

    if (favorites.length === 0)
        return <p className="text-center mt-20 text-lg">Sevimlilar bo'sh</p>;

    return (
        <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-pink-600">Sevimlilar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
    }
