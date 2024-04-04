import React, { useState } from "react";
import ForgotPassword from "../components/ForgotPassword";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


function LoginPage() {
  const [loginType, setLoginType] = useState("login");
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  // function that retrieves the user credentials
  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  // function to handle signup and send the details to firebase
  function handleSignup(e) {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // function to sign in an existing user
  function handleLogin(e) {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }

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
            <label htmlFor="email" className="font-semibold text-gray-800">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => {
                handleCredentials(e);
              }}
              className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-start mb-5">
            <label htmlFor="password" className="font-semibold text-gray-800">
              Password *
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => {
                handleCredentials(e);
              }}
              className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
            />
          </div>

          {/*conditionally rendering the signup and login buttons */}
          {loginType == "login" ? (
            <button
              onClick={(e) => {
                handleLogin(e);
              }}
              className="rounded-3xl font-bold p-2 bg-[#deb887] md:w-3/12"
            >
              Login
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleSignup(e);
              }}
              className="rounded-3xl font-bold p-2 bg-[#deb887] md:w-3/12"
            >
              Sign up
            </button>
          )}

          {/* conditionally rendering the error message */}
          {error && <div className="mt-3 text-red-600">{error}</div>}

          <div className="font-semibold mt-3">
            <p
              onClick={() => {
                console.log("clicked forgot password");
                setForgotPassword(!forgotPassword);
              }}
              className="text-red-600 underline cursor-pointer italic"
            >
              Forgot Password
            </p>
            {forgotPassword && <ForgotPassword />}
          </div>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
