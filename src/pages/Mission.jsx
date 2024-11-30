import React from "react";


// components
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header";
import LandingArticle from "../components/LandingArticle/LandingArticle";
import Article from "../components/Article/Article";


import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";


export default function Teams() {
    return (
        <div className="teams">
            <Navbar />
            <Header />
            <LandingArticle>
            <h1 className="pageTitle">Mission</h1>

                <div className="article-teams">
                    <h2>UX Metrics to drive your entire organization.</h2>
                    <p>Insert some text about missions</p>
                    <p>I remember Sara putting in a wall of text. A left and right side.</p>
                    <p>Figure out how it was look like on mobile.</p>

                </div>

            </LandingArticle>
            {/* <Article>
            
            </Article> */}
            
            <TestComponent>
                <div>
                    <h3>For Less than 8 Team Members: Join a Public Course</h3>
                    <p>As a team, you’ll develop your UX Metrics plan as a team . and alongside a small group of teams facing similar challenges. Together, you’ll start drafting the blueprints for what change will look like across your organization. You’ll come away with your own custom approach to UX Metrics that your entire team can use.</p>
                    <p>When you sign up for a public course cohort:
                    </p>
                    <ul>
                        <li>Sign up each team member at the Team Member Price and save $100 off each registration.
                        </li>
                        <li>Each team member purchases their registration separately or contact us for an invoice.</li>
                    </ul>
                    <p>Pick the next cohort that works best for your team members.
                        If you need to move your team to another cohort date after your team signs up, no worries; we can take care of moving your team.
                    </p>
                </div>
                <div>
                    <img src="/images/public-teams.png" alt="Jared" className="left-content-image" />
                </div>
            </TestComponent>
            <TestComponent>
                <div>
                    <img src="/images/private-teams.png" alt="Jared" className="left-content-image" />
                </div>
                <div>
                    <h3>For More than 8 Team Members:
                        Plan a Private Workshop
                    </h3>
                    <p>Our private workshops work one-on-one with Jared and are ideal for teams who are:
                    </p>
                    <ul>
                        <li>larger than eight team members (you’ll save on the cost of the workshop).

                        </li>
                        <li>scaling their design capabilities.
                        </li>
                        <li>growing their organization's UX maturity.
                        </li>
                        <li>tackling new or complex projects.
                        </li>
                    </ul>
                    <h3>Next Steps for a Private Workshop:
                    </h3>
                    <p>Reach out to us, and we’ll send you a link to jump on a one-on-one call with Jared. Jared will work with you to determine if this course is best for your team.
                    </p>
                    <p>Jared will work with you to pick dates and times that work best for your team members.
                    </p>
                </div>
            </TestComponent>

            <Footer />
        </div >

    )
}