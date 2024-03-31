import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="">
      <div className="hidden md:flex flex-col gap-5 h-full overflow-auto fixed md:w-1/4 lg:w-1/5 p-2 border-r-2 bg-white text-gray-800">
        <img
          src="/images/logo.png"
          alt="craft School logo"
          className=" h-8 w-3/4 pl-9"
        />
        <hr className="w-full mt-3 bg-blue-500" />
        <ul className="flex flex-col gap-3 text-lg">
          <Link to="/">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9">
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
              Home
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9">
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
              Profile
            </li>
          </Link>
          <Link to="/upload_videos">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9">
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
              Upload Videos
            </li>
          </Link>
        </ul>
        <button className="rounded-xl text-white font-bold p-2 bg-blue-600 hover:bg-blue-500 md:w-3/12 ml-20 mt-5">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
