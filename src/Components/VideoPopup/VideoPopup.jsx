import React, { useState } from "react";
import { Play } from "lucide-react";

const VideoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePlayClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Play Button */}
      <button onClick={handlePlayClick} className="z-10 relative">
        <Play
          size={45}
          className="bg-brand-primary p-2 text-white rounded-full"
        />
      </button>

      {/* Overlay and Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-full max-w-3xl px-4">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full px-3 py-1"
            >
              ✕
            </button>

            {/* Video Player */}
            <div className="aspect-video">
              {/* <iframe
                className="w-full h-full rounded-xl"
                src="https://youtu.be/DYzUkSnkcpU?si=Y7uxtHzk6YyqjWB7"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              /> */}
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/DYzUkSnkcpU?si=Y7uxtHzk6YyqjWB7"
                title="Personality Development"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
