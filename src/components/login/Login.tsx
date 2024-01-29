import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="absolute  flex items-center justify-center h-screen bg-gray-100 top-[-170px]  left-90 ">
      <form className="p-8 bg-white rounded shadow-md w-200">
        <h2 className="mb-4 text-2xl font-semibold text-center text-dark">
          გამარჯობა
        </h2>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-dark "
            htmlFor="email"
          >
            მეილი*
          </label>
          <input
            className="w-full p-2 border border-dark-300 text-gray "
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-dark"
            htmlFor="password"
          >
            პაროლი*
          </label>
          <input
            className="w-full p-2 border rounded-md text-gray-dark border-dark-300 "
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full p-2 bg-blue-500 rounded-md text-dark hover:bg-blue-600"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-dark">
          Don't have an account?{" "}
          <a className=" text-dark" href="/signup">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
