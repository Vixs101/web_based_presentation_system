import React, { useState } from "react";

function LoginPage () {
  const [loginType, setLoginType] = useState('login');
  
  return (
    <div>
      <section>
        <h1>Welcome to Craft School</h1>
        <p>Login or create an account to continue</p>
        <div>
          <button
            className={`btn ${loginType == "login" ? "selected" : ""}`}
            onClick={() => setLoginType("login")}
          >
            Login
          </button>
          <button
            className={`btn ${loginType == "signup" ? "selected" : ""}`}
            onClick={() => setLoginType("signup")}
          >
            Signup
          </button>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
