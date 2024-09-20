import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/charity_website/home';
import AboutUs from '../src/charity_website/aboutus';
import Events from '../src/charity_website/events';
import Donate from '../src/charity_website/donate';
import Contact from '../src/charity_website/contact';
import './App.css';

const Page: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; {new Date().getFullYear()} Charity Organization. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default Page;