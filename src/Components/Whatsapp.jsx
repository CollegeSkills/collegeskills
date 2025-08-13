import React from 'react';
import whatsapp from '../assets/chat.png'
const WhatsAppIcon = () => {
  const phoneNumber = '+917352430080'; 

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 z-50 right-4">
      <button
        onClick={handleClick}
        className="rounded-full tra nsform p-1transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
       <img src={whatsapp} alt="chat" className='object-cover w-16 h-16'/>
      </button>
    </div>
  );
};

export default WhatsAppIcon;
