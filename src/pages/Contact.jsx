import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Contact() {
  const { darkMode } = useGlobalContext();

  return (
    <div className={`container mx-auto p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h1 className="text-3xl font-bold mb-4">Biz bilan bog‘lanish</h1>
      <p>
        Telefon: +998 91 666 30 55
        <br />
        Email: example@example.com
        <br />
        Manzil: Farg‘ona, O‘zbekiston
      </p>
    </div>
  );
}
