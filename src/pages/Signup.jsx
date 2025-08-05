import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext"; 
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const { /* darkMode, setDarkMode, cart, setCart */ } = useGlobalContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <section className="bg-gray-600 py-8">
      <div className="align-elements h-screen grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 bg-[#00000032] rounded-2xl p-10"
        >
          <div className="flex gap-2 text-3xl font-bold mb-3 mx-18">
            <h1>Nilushoping</h1>
          </div>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend text-white">Your FirstName:</legend>
            <input
              name="firstName"
              type="text"
              className="input"
              placeholder="Type to here"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend text-white">Your LastName:</legend>
            <input
              name="lastName"
              type="text"
              className="input"
              placeholder="Type to here"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset ">
            <legend className="fieldeset-legend text-white">Email:</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type to here"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend text-white">Password:</legend>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Type to here"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div>
            <button
              type="submit"
              className="btn bg-[#00c724] text-white mx-25 mb-5"
            >
              SignUp
            </button>

            <div className="flex gap-3 text-white">
              <h3 className="ml-5">Do you have an account?</h3>
              <Link to="/login" className="text-[#00c724]">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
