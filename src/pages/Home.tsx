import React from "react";
import VideoComponent from "../components/VideoComponent";


function Home() {
  return (
    <>
      <section className="flex flex-col p-4 gap-3 bg-gray-50">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
          Welcome to Craft School <span className="text-[#deb887]">!!</span>
        </h1>
        <VideoComponent/>
      </section>
    </>
  );
}

export default Home;
