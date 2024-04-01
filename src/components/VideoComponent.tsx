import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
declare global {
  interface ImportMeta {
    env: {
      [key: string]: string;
    };
  }
}

function VideoComponent() {
  const [videos, setVideos] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  // function to fetch videos
  const fetchVideos = async () => {
    setError(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=cats&key=${apiKey}`
      );

      setVideos(response.data.items);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // function to handle search
  const handleSearch = (searchTerm) => {};

  return (
    <div className="flex flex-col gap-5">
      <SearchBar onSearch={handleSearch} />

      <div className="self-center grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 max-w-full">
        {videos.map((video) => (
          <div
            key={video?.id?.videoId}
            className="flex flex-col gap-3 border bg-[#deb887] rounded-xl text-gray-800"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
              allowFullScreen
              className="w-full rounded-t-xl"
            ></iframe>
            <div className="ml-3 mb-3">
              <h2 className="text-base font-extrabold">Title: {video?.snippet?.title}</h2>
              <p className="font-bold">Channel: {video?.snippet?.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoComponent;
