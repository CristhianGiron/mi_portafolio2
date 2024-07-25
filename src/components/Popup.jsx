// Popup.js
import React from 'react';

const Popup = ({ position, content, onClose }) => {
  if (!position) return null;

  const popupStyle = {
    
    position: 'absolute',

    top: position.y-15,
    
  };

  return (
    <div className={`absolute dark:bg-[#191A19] bg-white shadow-lg p-5 rounded-lg  ${onClose ? "animate__animated animate__zoomIn" : ""}`} style={popupStyle}>
      <div className="relative">
        {content}
        
        <button className="transition-all duration-300 cursor-pointer rounded-[50%] border-white border-2 w-5 h-5 text-sm flex justify-center content-center items-center text-white rotate-45 -right-8 -top-8 absolute bg-black hover:rotate-12" onClick={onClose}>
          +
        </button>
      </div>
    </div>
  );
};

export default Popup;
