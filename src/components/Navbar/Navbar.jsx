import React, { useState } from "react";
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <section className="navbar-container">
            <nav className="navbar">

                {/* Hamburger icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </nav>
                {/* Links */}
                <div className={`navbar-links navbar-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/mission">Mission</Link>
                    <Link to="/page3">Programs (not done)</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/page5">Contact (not done)</Link>
                </div>

        
        </section>
    );
}
