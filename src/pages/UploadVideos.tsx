import React from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function UploadVideos() {
  return (
    <>
      <div className="h-full w-full flex flex-col p-4 items-center bg-gray-50">
        <div className="flex flex-col items-center p-4 border-dashed border-2 h-1/2 w-full md:w-3/6 border-[#deb887]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3/4 h-1/4 text-[#deb887]"
          >
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
            <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
          </svg>
          <h2>Choose a video file</h2>
          <input
            type="file"
            className="rounded-xl text-gray-800 font-bold p-2 mt-3 self-center text-center cursor-pointer bg-[#deb887]"
          />
          <button
            className="rounded-xl text-gray-800 font-bold p-2 bg-[#deb887] mx-auto hover:bg-[#efcfa4] mt-3 self-center w-1/2 md:w-1/4"
            type="submit"
          >
            Upload Video
          </button>
        </div>

      </div>
    </>
  );
}

export default UploadVideos;
