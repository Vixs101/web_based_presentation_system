import React, { useState } from "react";

function LoginPage() {
  const [loginType, setLoginType] = useState("login");

  return (
    <div className="flex items-center justify-center h-full w-full bg-blue-300">
      <section className="flex flex-col gap-3 height w-11/12 md:w-1/2 p-5 bg-white rounded-2xl text-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Welcome to Craft School
        </h1>
        <p>Login or create an account to continue</p>
        <div className="flex gap-3">
          <button
            className={`rounded-lg text-white font-bold p-2 bg-blue-300 ${
              loginType == "login" ? "bg-slate-400" : ""
            }`}
            onClick={() => setLoginType("login")}
          >
            Login
          </button>
          <button
            className={`rounded-lg text-white font-bold p-2 bg-blue-300 ${
              loginType == "signup" ? "bg-slate-400" : ""
            }`}
            onClick={() => setLoginType("signup")}
          >
            Signup
          </button>
        </div>
        <form className="w-3/4">
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=""
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {loginType == "login" ? (
            <button className="rounded-lg text-white font-bold p-2 bg-blue-300">Login</button>
          ) : (
            <button className="rounded-lg text-white font-bold p-2 bg-blue-300">Sign up</button>
          )}
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
