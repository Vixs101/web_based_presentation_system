import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  // handle email change in the input field
  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(email)
  }

  // handle submit event
  function handleSubmit(event) {
    sendPasswordResetEmail(auth, email);
  }

  return (
    <>
      <div>
        <div className="flex flex-col gap-2 items-center self-center mt-5 w-full">
          {!sentMessage ? (
            <>
              {" "}
              <input
                type="email"
                name="email"
                onChange={handleEmailChange}
                placeholder="Input your email to reset your password"
                className="outline-none border p-2 border-[#deb887] rounded-xl w-full text-center"
              />
              <button
                type="submit"
                onClick={() => {
                  handleSubmit;
                  setSentMessage(true);
                }}
                className="rounded-3xl font-bold p-2 bg-[#deb887] md:w-3/12"
              >
                submit
              </button>
            </>
          ) : (
            <p className="text-red-600 cursor-pointer italic">
              Check Your Mail for the Reset link!{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
