// src/components/Confirmation.jsx
import React from 'react';
import './Confirmation.css';  // Import the Confirmation-specific CSS
const Confirmation = () => {
  return (
    <div className="confirmation">
      <h1>Appointment Confirmed!</h1>
      <p>Your appointment with Dr. Smith is confirmed for Oct 20, 3:00 PM.</p>
    </div>
  );
};

export default Confirmation;
