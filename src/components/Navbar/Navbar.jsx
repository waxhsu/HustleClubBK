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
                    <Link to="/">Home (Page0)</Link>
                    <Link to="/events">P1 (Events)</Link>
                    <Link to="/page2">P2 (Mission)</Link>
                    <Link to="/page3">P3 (Programs)</Link>
                    <Link to="/page4">P4 (Team)</Link>
                    <Link to="/page5">P5 (Contact)</Link>
                </div>

        
        </section>
    );
}
