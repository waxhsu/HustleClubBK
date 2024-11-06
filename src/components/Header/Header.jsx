import React, { useState } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import titleBanner from '../../images/titleBanner.png'


export default function Header() {
    return (
        <section className="header">
            <div id="title-container">
                <Link to="/">
                    <img id="titleBanner" src={titleBanner} />
                </Link>
            </div>
                <div className="subtitleBanner">OUR NEXT WEDNESDAY SOCIAL IS 11/2... <Link to="/Events">see details</Link></div>
            {/* {location.pathname === '/' && <Hero />} */}
        </section>
    );
}
