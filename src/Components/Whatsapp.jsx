import React from 'react';
import whatsapp from '../assets/chat.webp'
const WhatsAppIcon = () => {
  const phoneNumber = '+917352430080'; 

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 z-50 right-4">
      <button
        onClick={handleClick}
        className="transform rounded-full"
        aria-label="Chat on WhatsApp"
      >
       <img src={whatsapp} alt="chat" className='object-cover w-20 h-20'/>
      </button>
    </div>
  );
};

export default WhatsAppIcon;
