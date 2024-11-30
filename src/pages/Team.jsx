import React from "react";


// components
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header";
import LandingArticle from "../components/LandingArticle/LandingArticle";
import Article from "../components/Article/Article";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";



export default function Topics() {
    return (
        <div className="topics">
            
            <Navbar />
            <Header />
            < LandingArticle >
            <h1 className="pageTitle">Meet The Team</h1>
                <div>
                    <h2>Refer to Events page .map</h2>
                    <p>google sheets?</p>
                    <p>local?</p>
                < Team/>
                </div>
            </LandingArticle >

            <TestComponent >
                
            </TestComponent >

            <Footer />
        </div >


    )


}