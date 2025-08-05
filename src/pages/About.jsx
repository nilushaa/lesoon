    import React from "react";
    import { useGlobalContext } from "../context/GlobalContext";

    export default function About() {
    const { darkMode } = useGlobalContext();

    return (
        <div className="container mx-auto p-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-semibold mb-4">Biz haqimizda</h2>
        <p>
            Bu do'kon sizga eng yaxshi kiyim-kechak mahsulotlarini taklif qiladi.
            Bizda hamma tavarlar sifati zor va arzon, hamma narsani topsa bo‘ladi.
            Tanlovdan adashmadilar! :()
        </p>
        </div>
    );
    }
