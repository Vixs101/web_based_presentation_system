import React from "react";

function Home() {
  return (
    <>
      <section className="flex flex-col p-4 gap-3 bg-gray-50">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
          Welcome to Craft School!
        </h1>
        <div className="flex self-center border-2 p-2 border-[#deb887] rounded-xl w-1/2">
          <input
            type="text"
            name="search"
            placeholder="What do you want to learn today"
            className="outline-none w-full"
          />
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
        </div>
      </section>
    </>
  );
}

export default Home;
