import React, { useState } from "react";
import Popup from "./Popup";
import "./Referral.css"; // Import Referral-specific CSS

const Referral = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Show the popup after submission
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="referral">
      <h1>Referral Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Referring Doctor Name" required />
        <input type="text" placeholder="Patient Name" required />
        <textarea placeholder="Reason for Referral" required></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* Popup will appear here */}
      {showPopup && (
        <Popup message="Referral Submitted Successfully!" onClose={closePopup} />
      )}
    </div>
  );
};

export default Referral;
