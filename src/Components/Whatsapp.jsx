import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = '+917352430080'; 

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed z-50 bottom-24 right-4">
      <button
        onClick={handleClick}
        className="bg-green-500 rounded-full shadow-lg tra nsform p-1transition-transform hover:bg-green-600 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 448 512"
          width="24"
          height="24"
        >
          <path d="M380.9 97.1C339-17.8 198.8-31.7 119.1 44.1c-40.7 38.8-62.7 93-58 148.6L33.8 352.6c-5.2 21.1 14.7 39.2 35.2 32.6l97.6-32c50.2 26.4 112.5 27.4 162.6-2.4 79.7-45.8 93.6-185.9 52.7-256.3zm-67.6 178.2c-7.3 20.3-34.3 38.8-56.2 44.1-38.1 9.4-89.6-7.3-133.6-46.2-44.1-38.8-64.1-93.6-54.7-139.1 4.2-19.9 14.6-34.8 29.4-43.5 13.3-7.8 28.9-6.8 42.7-1.6 19.1 7.3 24.6 19.1 28.2 33.2 3.1 11.8-3.1 22.8-8.9 28.4l-18.2 16.1c-6.3 5.7-5.2 16.1 1.6 21.4l20.9 17.7c13.6 11.5 27.3 23.5 41.6 32.6 9.9 6.3 20.9 2.6 26.7-5.2l12-17.7c6.3-9.4 15.6-10.9 26.2-7.8 13.5 3.6 27.7 12.4 31.4 22.8 3.7 10.4.5 17.7-1.1 21.5z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppIcon;
