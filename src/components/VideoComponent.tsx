import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BASE_URL } from "../config";
import SearchBar from "./SearchBar";

function VideoComponent() {
  const [videos, setVideos] = useState([]);

  // function to fetch videos
  const fetchVideos = async (searchTerm) => {
    try {
    } catch (error) {
    }
  };

  // function to handle search
  const handleSearch = (searchTerm) => {}

  return (
    <div className="flex flex-col gap-5">
      <SearchBar onSearch={handleSearch}/>

      <div>
        {videos.map((video:any) => (
          <div key={video?.id?.videoId}>
            <iframe
              src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
              width={560}
              height={315}
              allowFullScreen
            ></iframe>
            <h2>{video?.snippet?.title}</h2>
            <p>Channel: {video?.snippet?.channelTitle}</p>
            <p>Views: {video?.snippet?.viewCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoComponent
