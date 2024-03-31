import React, { useState } from "react";

function LoginPage() {
  const [loginType, setLoginType] = useState("login");

  return (
    <div className="flex items-center justify-center h-full w-full bg-[#deb887]">
      <section className="flex flex-col gap-3 height w-11/12 md:w-1/2 p-5 bg-white rounded-3xl text-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Welcome to Craft School
        </h1>
        <p>Login or create an account to continue</p>
        <div className="flex gap-3">
          <button
            className={`rounded-lg text-gray-800  font-bold p-2  ${
              loginType == "login" ? "bg-slate-600 text-white" : "bg-[#deb887]"
            }`}
            onClick={() => setLoginType("login")}
          >
            Login
          </button>
          <button
            className={`rounded-lg text-gray-800 font-bold p-2  ${
              loginType == "signup" ? "bg-slate-600 text-white" : "bg-[#deb887]"
            }`}
            onClick={() => setLoginType("signup")}
          >
            Signup
          </button>
        </div>
        <form className="w-3/4">
          <div className="flex flex-col gap-2 items-start mb-5">
            <label htmlFor="email" className="font-semibold text-gray-800">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-start mb-5">
            <label htmlFor="password" className="font-semibold text-gray-800">Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
            />
          </div>

          {loginType == "login" ? (
            <button className="rounded-3xl font-bold p-2 bg-[#deb887] md:w-3/12">Login</button>
          ) : (
            <button className="rounded-3xl font-bold p-2 bg-[#deb887] md:w-3/12">Sign up</button>
          )}
        </form>
        
        <p className="underline cursor-pointer italic text-red-600 font-semibold">Forgot Password</p>
      </section>
    </div>
  );
}

export default LoginPage;
