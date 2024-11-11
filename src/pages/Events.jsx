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

                {/* PERHAPS CREATE A FILTER COMPONENT??? */}
                <div>filters:</div>
                <div>NUMBER results</div>
                <Calendar />
                <div className="events-moreInfo">
                Events are updated on a regular basis. Check back for more or
                <a href="mailto: hello@hustleclub.org">get in touch</a>
                to do something together.
                </div>
            </LandingArticle >




            <Footer />
        </div>


    )


}