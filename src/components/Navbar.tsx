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
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[#deb887] font-extrabold"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
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
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[#deb887] font-extrabold"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clipRule="evenodd"
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
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[#deb887] font-extrabold"
      >
        <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
      </svg>
    ),
  },
];

// main function

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 flex fixed justify-between items-center p-2 md:hidden">
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
          <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#deb989] self-center">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
