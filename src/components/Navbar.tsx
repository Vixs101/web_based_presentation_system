import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-white flex fixed justify-between items-center p-2 md:hidden">
      <img src="/images/logo.png" alt="logo" className="h-8 w-5/12"/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-10 font-extrabold"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
