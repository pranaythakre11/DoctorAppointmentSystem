import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Referral from "./components/Referral";
import PatientProfile from "./components/PatientProfile";
import DoctorProfile from "./components/DoctorProfile";
import Confirmation from "./components/Confirmation";
import './App.css'; // Global CSS for navbar and background

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar with Logo */}
        <header className="navbar">
          <img src="/logo.png" alt="App Logo" className="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="/referral">Referral</Link></li>
              <li><Link to="/patient-profile">Patient Profile</Link></li> {/* Link to Patient Profile */}
              <li><Link to="/doctor-profile">Doctor Profile</Link></li>  {/* Link to Doctor Profile */}
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/patient-profile" element={<PatientProfile />} /> {/* Route for Patient Profile */}
          <Route path="/doctor-profile" element={<DoctorProfile />} />   {/* Route for Doctor Profile */}
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
