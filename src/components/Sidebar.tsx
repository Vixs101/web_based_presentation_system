import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="">
      <div className="hidden md:flex flex-col gap-5 h-full overflow-auto fixed md:w-1/4 lg:w-1/5 p-2 border-r-2 border-r-[#deb887] bg-gray-50 text-gray-800">
        <img
          src="/images/logo.png"
          alt="craft School logo"
          className=" h-8 w-3/4 pl-9"
        />
        <hr className="w-full mt-3 bg-[#deb887]" />
        <ul className="flex flex-col gap-3 text-lg">
          <Link to="/">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#deb887] font-extrabold"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              Home
            </li>
            <hr className="w-full bg-[#deb887]" />
          </Link>
          <Link to="/profile">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9 text-gray-800">
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
              Profile
            </li>
            <hr className="w-full bg-[#deb887]" />
          </Link>
          <Link to="/upload_videos">
            <li className="flex gap-2 hover:bg-slate-300 h-10 items-center pl-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#deb887] font-extrabold"
              >
                <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
              Upload Videos
            </li>
            <hr className="w-full bg-[#deb887]" />
          </Link>
        </ul>
        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#deb989] md:w-3/12 ml-20 mt-5">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
