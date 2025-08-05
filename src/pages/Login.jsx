import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      login(storedUser);
      navigate("/");
    } else {
      setError("Email yoki parol noto‘g‘ri.");
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-30 rounded-2xl p-10 w-96 flex flex-col gap-6 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Nilushoping
        </h1>

        <fieldset>
          <legend className="text-white mb-1">Email:</legend>
          <input
            name="email"
            type="email"
            placeholder="Emailni kiriting"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </fieldset>

        <fieldset>
          <legend className="text-white mb-1">Parol:</legend>
          <input
            name="password"
            type="password"
            placeholder="Parolni kiriting"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </fieldset>

        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
        >
          Kirish
        </button>

        <div className="text-white text-center">
          <span>Accountingiz yo‘qmi? </span>
          <Link to="/signup" className="text-green-500 hover:underline">
            Ro‘yxatdan o‘tish
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
    