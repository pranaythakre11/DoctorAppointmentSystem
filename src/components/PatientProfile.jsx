// src/components/PatientProfile.jsx
import React from 'react';
import './Profile.css';  // Import the shared Profile CSS

const PatientProfile = () => {
  return (
    <div className="profile">
      <h1>Patient Profile</h1>
      <div className="patient-info">
        <p><strong>Name:</strong> Shyam</p>
        <p><strong>Medical History:</strong> Heart Disease and Migraine</p>
        <p><strong>Upcoming Appointments:</strong> Dr. Pandey, Oct 20</p>
      </div>
    </div>
  );
};

export default PatientProfile;

