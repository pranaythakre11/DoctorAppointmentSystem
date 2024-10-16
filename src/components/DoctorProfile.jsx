import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorProfile.css'; // Import specific CSS for Doctor Profile

const doctors = [
  {
    name: "Dr. Pandey",
    specialty: "Cardiologist",
    experience: "10 years",
    image: "/images/doctor1.jpg",
  },
  {
    name: "Dr. Thakre",
    specialty: "Neurologist",
    experience: "8 years",
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Ravi Kumar",
    specialty: "Pediatrician",
    experience: "12 years",
    image: "/images/doctor3.jpg",
  },
  {
    name: "Dr. Soni",
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    image: "/images/doctor4.jpg",
  }
];

const DoctorProfile = () => {
  return (
    <div className="doctor-profile">
      <h1>Our Doctors</h1>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={`${doctor.name}`} className="doctor-image" />
            <h2>{doctor.name}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <Link to="/appointment" className="book-link">Book Appointment</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
