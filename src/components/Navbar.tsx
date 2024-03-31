import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Profile",
    url: "/profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Upload Videos",
    url: "/upload_videos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>
    ),
  },
];

// main function

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white flex fixed justify-between items-center p-2 md:hidden">
      <img src="/images/logo.png" alt="logo" className="h-8 w-5/12" />

      {/* rendering the open and close icon conditionally */}

      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-10 font-extrabold cursor-pointer duration-500"
          onClick={() => setOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-10 font-extrabold cursor-pointer duration-500"
          onClick={() => setOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}

      {/* rendering the links */}

      {open && (
        <div className="absolute flex flex-col gap-5 px-5 py-10 text-lg font-semibold right-0 top-2 mt-12 h-[calc(100vh-7rem)] w-[calc(100vw-5rem)] bg-white border-gray-300 border-2 text-black rounded-lg duration-500">
          {links.map((item) => (
            <Link to={item.url} key={item.id} onClick={() => setOpen(false)}>
              <div className="flex gap-2 hover:bg-slate-300 h-10  items-center ml-9">
                {item.icon}
                {item.title}
              </div>
              <hr className="w-full mt-3 bg-blue-500" />
            </Link>
          ))}
          <button className="rounded-3xl w-1/2 text-white font-bold p-2 bg-blue-600 hover:bg-blue-500 mt-5 self-center">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
