import React from 'react';
import './Home.css'; // Import CSS for the home page
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-text">
          <span className="text-animate">Welcome to DoctorCare!</span>
        </h1>
        <p className="hero-subtext">Your Health, Our Priority</p>
        <Link to="/appointment" className="cta-button">Book an Appointment</Link>
      </div>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At DoctorCare, we provide high-quality healthcare services with top doctors from various specialties.
          Our mission is to offer the best healthcare experience to every patient, ensuring your wellness is our top priority.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <i className="fas fa-user-md"></i>
            <h3>General Checkup</h3>
            <p>Routine health checkups to ensure your well-being.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-heartbeat"></i>
            <h3>Cardiology</h3>
            <p>Comprehensive care for your heart health.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-brain"></i>
            <h3>Neurology</h3>
            <p>Advanced neurological care from experienced specialists.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2024 DoctorCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
