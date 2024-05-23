import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import { FaSearch, FaDownload } from 'react-icons/fa';

const YouTubePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    // Fetch default education videos when component mounts
    fetchDefaultVideos();
  }, []);

  const fetchDefaultVideos = async () => {
    try {
      // Use your own YouTube API key
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=education&key=AIzaSyApxFfnE9lSdh_tnWmgYqkVnt70V3djRVY`
      );
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]?.id?.videoId || '');
    } catch (error) {
      console.error('Error fetching default videos:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=AIzaSyApxFfnE9lSdh_tnWmgYqkVnt70V3djRVY`
      );
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]?.id?.videoId || '');
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const downloadVideo = (videoId) => {
    window.open(`http://localhost:3000/download?videoId=${videoId}`, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">YouTube Videos</h1>
      <form onSubmit={handleSearch} className="mb-8 flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for videos..."
          className="border border-gray-300 p-2 rounded-l w-2/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </form>
      {selectedVideo && (
        <div className="mb-8">
          <YouTube videoId={selectedVideo} className="w-full h-64" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{video.snippet.title}</h2>
              <p className="text-gray-700 mb-4">{video.snippet.channelTitle}</p>
              <button
                onClick={() => setSelectedVideo(video.id.videoId)}
                className="text-blue-500 flex items-center mb-2"
              >
                <FaSearch className="mr-2" /> Watch Video
              </button>
              <button
                onClick={() => downloadVideo(video.id.videoId)}
                className="text-blue-500 flex items-center"
              >
                <FaDownload className="mr-2" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubePage;
