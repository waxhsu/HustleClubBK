import React, { useState } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-paragraphs">
                {/* <p>Social dance is for everyone</p> */}
            </div>
        </div>
    )
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <section className="header-background" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
        }}>
            <section className="header">
                <nav className="header-nav">
                    {/* <img className="header-logo" src="/images/Center_Centre_Logo.png" alt="center centre logo" /> */}

                    {/* Hamburger icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                </nav>
                    {/* Links */}
                    <div className={`header-links header-links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/">Home (Page0)</Link>
                        <Link to="/page1">P1 (Events)</Link>
                        <Link to="/page2">P2 (Mission)</Link>
                        <Link to="/page3">P3 (Programs)</Link>
                        <Link to="/page4">P4 (Team)</Link>
                        <Link to="/page5">P5 (Contact)</Link>
                    </div>

                    
                <div id="title-container">
                    <Link id="titleBanner" to="/">HUSTLE∂¥CLUB</Link>
                </div>
                    <p className="subtitleBanner">OUR NEXT WEDNESDAY SOCIAL IS 11/2... <Link to="/Events">see details</Link></p>
                <Hero />
                {/* {location.pathname === '/' && <Hero />} */}
            </section>
        </section>
    );
}
