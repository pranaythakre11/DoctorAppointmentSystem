import React from "react";
import "./Popup.css"; // Import popup-specific CSS

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{message}</h2>
        <button onClick={onClose} className="close-btn">OK</button>
      </div>
    </div>
  );
};

export default Popup;
