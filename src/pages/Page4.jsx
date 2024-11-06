import React from "react";


// components
import Header from "../components/Header/Header";
import LandingArticle from "../components/LandingArticle/LandingArticle";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Modal from "../components/Modal/Modal";


export default function Topics() {
    return (
        <div className="topics">
            <Header />
            < LandingArticle >
                <h1>Course Topics</h1>
            </LandingArticle >
            <TestComponent >
                <div>
                    <h2>Develop your own organization’s Outcome-driven UX Metrics.</h2>
                    <p>Join us to complete your journey with metrics that will <b>drive your organization to deliver better-designed products and services.</b></p>
                    <p>You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.</p>
                    <p>During each of this course’s four weeks, you’ll cover two of the eight topics. For each topic, you’ll watch a pre-recorded lecture and join Jared in a live small-group coaching session. </p>
                    <p>The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members.
                    </p>
                    <p>In each coaching session, you’ll work directly with Jared and your fellow cohort members to identify your own metrics and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.</p>
                    <p>We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your Outcome-driven UX metrics.
                    </p>
                </div>
                <Modal />
            </TestComponent >

            {/* <Footer /> */}
        </div >


    )


}