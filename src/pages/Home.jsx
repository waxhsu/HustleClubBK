import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

// Components
import Header from '../components/Header/Header';
import LandingArticle from '../components/LandingArticle/LandingArticle';
import Modal from "../components/Modal/Modal";
import HomeDirectory from "../components/HomeDirectory/HomeDirectory";
import Footer from '../components/Footer/Footer';
import bgVideo from "../videos/bgVideo.MP4"


export default function Home() {
    return (
        <div className="App">
            <div>


                
                <Header />

                < LandingArticle >
                <div className="landing-text-container">
                    <h2 className="landing-text">
                        Social dance is for everyone. <br /> Except for you, I guess.
                    </h2>
                </div>
                <div className="landingButton-container">
                    <div className="landing-btn">DANCE ➔</div>
                    <div className="landing-btn">DONATE ➔</div>
                    <div className="landing-btn">PARTNER ➔</div>
                </div>
                <video autoPlay loop muted className="background-video">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                </LandingArticle >

                < HomeDirectory >
                    <Link to="/page1">Events</Link>
                    <Link to="/page2">Mission</Link>
                    <Link to="/page3">Programs</Link>
                    <Link to="/page4">Team</Link>
                    
                    <Link to="" alt="bottom-line" />

                </HomeDirectory>
                <Footer />
            </div>
        </div>
    );
}