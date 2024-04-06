import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";

function Profile() {
  const [userEmail, setUserEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // getting the current user when the component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user?.email ?? "");
      } else {
        console.log("no user is signed");
      }
    });

    return () => unsubscribe();
  }, []);

  // function to update the user credentials
  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      //get the current user
      const user = auth.currentUser;

      // create credential object from the current password
      const credential = reauthenticateWithCredential(
        EmailAuthProvider,
        credential(userEmail, currentPassword)
      );

      // reauthenticate the user
      await reauthenticateWithCredential(user, credential);

      if (newPassword && newPassword === confirmPassword) {
        await updatePassword(user, newPassword);
        setNewPassword("");
        setConfirmPassword("");
      }

      if (userEmail) {
        await updateEmail(user, userEmail);
      }

      alert("Profile updated successfully!");

    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <div className=" flex items-center justify-center w-full h-full bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between md:h-3/4 w-11/12 lg:w-3/4 py-6 px-4 bg-[#deb887] rounded-xl md:gap-5 items-center md:items-start gap-3 lg:gap-0">
          <div className="flex flex-col items-center w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:w-3/4 lg:w-full lg:h-1/2 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="m-0 text-lg md:text-base lg:text-lg font-bold text-gray-800">
              {userEmail}
            </h2>
          </div>
          <form className="flex flex-col flex-grow items-center bg-gray-50 rounded-2xl p-4 h-full w-full md:w-1/5 lg:w-auto">
            <h1 className="text-xl font-bold text-center text-gray-800">
              Edit User Details
            </h1>
            <div className="flex flex-col gap-2 items-start mb-5 w-full">
              <label htmlFor="email" className="font-semibold text-gray-800">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
              />
            </div>

            <div className="flex flex-col gap-2 items-start mb-5 w-full">
              <label htmlFor="password" className="font-semibold text-gray-800">
                Password *
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col gap-2 items-start mb- w-full">
              <label htmlFor="password" className="font-semibold text-gray-800">
                confirm Password *
              </label>
              <input
                type="password"
                name="password"
                placeholder="confirm password"
                className="outline-none border p-2 border-[#deb887] rounded-xl w-full"
              />
            </div>
            <button
              className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] mx-auto hover:bg-[#efcfa4] mt-3 self-center w-1/2 md:w-1/4"
              type="submit"
            >
              Save details
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
