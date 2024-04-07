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
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  let baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}`;

  // function to fetch videos
  const fetchVideos = async (searchTerm, pageToken = null) => {
    setError(null);

    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: searchTerm,
          part: "snippet",
          maxResults: 12,
          pageToken: pageToken,
        },
      });
      console.log(response.data);
      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);

      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      setError(error);
    }
  };

  // using useEffect for default videos
  useEffect(() => {
    fetchVideos("baking, soap making, and perfume making");

    //setting time for loading videos
    const timeOut = setTimeout(() => {
      setLoadingVideos(false);
    }, 10000);

    const secondDivTimeoutId = setTimeout(() => {
      setIsSecondDivVisible(true);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(secondDivTimeoutId);
    };
  }, []);

  // handling search from search bar
  const handleSearch = async (searchTerm) => {
    setIsSearching(true);
    // set video array to empty
    setVideos([]);
    await fetchVideos(searchTerm);
    setIsSearching(false);
  };

  //handle see more
  const handleSeeMore = async (searchTerm) => {
    if (searchTerm && nextPageToken) {
      console.log(searchTerm)
      await fetchVideos(searchTerm, nextPageToken);
      setIsSecondDivVisible(false);
      setIsSecondDivVisible(true);
    } else {
      console.log(searchTerm)
      searchTerm('')
      alert("End of Search Results")
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <SearchBar onSearch={handleSearch} />
      {isSearching && (
        <p className="text2xl font-extrabold text-gray-800 text-center">
          Loading Videos
        </p>
      )}

      {error ? (
        <div className="text-red-500 text-center">
          Error fetching videos: {error.message}
        </div>
      ) : (
        <div className="self-center grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 max-w-full">
          {videos.map((video) => (
            <div
              key={video?.id?.videoId}
              className="flex flex-col gap-3 border bg-[#deb887] rounded-xl text-gray-800"
            >
              {loadingVideos && (
                <div className="flex justify-center items-center h-20 animate-pulse bg-black rounded-t-xl">
                  <div className="w-8 h-8 rounded-full bg-gray-400 animate-spin"></div>
                </div>
              )}
              {isSecondDivVisible && (
                <iframe
                  src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
                  allowFullScreen
                  className="w-full rounded-t-xl"
                ></iframe>
              )}

              <div className="flex flex-col gap-3 ml-3 mb-3 ">
                <h2 className="text-base font-extrabold">
                  Title: {video?.snippet?.title}
                </h2>
                <p className="">Channel: {video?.snippet?.channelTitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {nextPageToken && (
        <p
          className="text-center font-bold text-xl underline cursor-pointer text-gray-800"
          onClick={handleSeeMore}
        >
          See More..
        </p>
      )}
    </div>
  );
}

export default VideoComponent;
