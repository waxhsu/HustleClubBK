import React from "react";

// components
import LandingArticle from "../components/LandingArticle/LandingArticle";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import Calendar from "../components/Calendar/Calendar";

export default function Events() {
    return (
        <div className="events">
            <Navbar />
            <h1 className="pageTitle">Events</h1>
            {/* <Header /> */}
            < LandingArticle >
                <div>filters:</div>
                <div>NUMBER results</div>
                <Calendar />

                


            </LandingArticle >



            <Footer />
        </div>


    )


}