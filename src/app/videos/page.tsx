'use client';

import React, { useState } from 'react';

const videos = [
  { src: '/videos/travel.mp4', tag: 'Travel Adventure' },
  { src: '/videos/travel2.mp4', tag: 'Travel Memories' },
  { src: '/videos/travel3.mp4', tag: 'Travel Vibes' },
  { src: '/videos/eat.mp4', tag: 'Tasty Treats' },
  { src: '/videos/relax.mp4', tag: 'Relaxation Time' },
  { src: '/videos/relax2.mp4', tag: 'Peaceful Moments' },
];

const VideoPage = () => {
  const [mainVideo, setMainVideo] = useState(videos[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 3;

  const handleNext = () => {
    if (currentIndex + videosPerPage < videos.length) {
      setCurrentIndex(currentIndex + videosPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - videosPerPage >= 0) {
      setCurrentIndex(currentIndex - videosPerPage);
    }
  };

  const visibleVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      {/* Main Video Section */}
      <div className="text-center mb-8">
        <video
          src={mainVideo.src}
          controls
          autoPlay
          loop
          className="w-full sm:w-4/5 lg:w-3/4 mx-auto shadow-lg"
        ></video>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">{mainVideo.tag}</h2>
      </div>

      {/* Grid Section */}
      <div className="text-center mb-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`px-4 py-2 mr-2 rounded bg-blue-500 text-white font-bold ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + videosPerPage >= videos.length}
          className={`px-4 py-2 ml-2 rounded bg-blue-500 text-white font-bold ${
            currentIndex + videosPerPage >= videos.length
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleVideos.map((video, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setMainVideo(video)}
          >
            {/* Video */}
            <video
              src={video.src}
              muted
              loop
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            ></video>

            {/* Tag */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg sm:text-xl font-semibold text-white">{video.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
