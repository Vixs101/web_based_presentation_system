import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="flex self-center border-2 p-2 px-3 border-[#deb887] rounded-3xl w-3/4 md:w-1/2 "
      >
        <input
          type="text"
          value={searchTerm}
          placeholder="What do you want to learn today??"
          className="outline-none w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#deb887] font-extrabold cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <div className="flex items-center gap-3 justify-center flex-wrap">
        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#efcfa4] self-center">
          Perfume Making
        </button>

        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#efcfa4] self-center">
          Cream Making
        </button>

        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#efcfa4] self-center">
          Baking
        </button>

        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#efcfa4] self-center">
          Soap Making
        </button>

        <button className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] hover:bg-[#efcfa4] self-center">
          Chemical Making
        </button>
      </div>
    </>
  );
}
