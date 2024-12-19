import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { LoginPage } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { FlightsPage } from './pages/Flights';
import { BookingPage } from './pages/Booking';
import { DestinationsPage } from './pages/Destinations';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import AdminPage from './pages/AdminPage'; // Import the new AdminPage
import { Toaster } from 'react-hot-toast';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  // Get the JWT token from localStorage or sessionStorage
  const token = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');

  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Routes>
          {/* Non-Admin Pages */}
          <Route path="/" element={<><Navbar /><Hero /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />
          <Route path="/dashboard" element={<><Navbar /><DashboardPage /><Footer /></>} />
          <Route path="/flights" element={<><Navbar /><FlightsPage /><Footer /></>} />
          <Route path="/booking" element={<><Navbar /><BookingPage /><Footer /></>} />
          <Route path="/destinations" element={<><Navbar /><DestinationsPage /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />

          {/* Admin Pages */}
          <Route path="/admin/*" element={<><Navbar /><AdminPage/><Footer /></>} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;

