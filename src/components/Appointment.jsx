import React, { useState } from "react";
import Popup from "./Popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faCalendarAlt, faClock, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import "./Appointment.css";

const Appointment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <FontAwesomeIcon icon={faUserMd} />
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <FontAwesomeIcon icon={faUserMd} />
          <input type="text" placeholder="Doctor Name" required />
        </div>

        <div className="form-group">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <input type="date" required />
        </div>

        <div className="form-group">
          <FontAwesomeIcon icon={faClock} />
          <input type="time" required />
        </div>

        <div className="form-group">
          <FontAwesomeIcon icon={faNotesMedical} />
          <textarea placeholder="Describe your symptoms" rows="4" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {showPopup && <Popup message="Appointment Booked Successfully!" onClose={closePopup} />}
    </div>
  );
};

export default Appointment;
