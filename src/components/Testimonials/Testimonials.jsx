import React from "react";
import './Testimonials.css';


export default function Testimonials({ children }) {
    return (
        <section className="testimonials" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
        }}>
            <div className="testimonials-content">
                <div className="testimonials-test">
                    <img src="images/star.png" alt="star" className="testimonials-star" />
                    {/* <p>The content of this course has deeply impacted my career (and love for experience design). Your framing of UX outcomes and metrics particularly filled a previously daunting gap in my practice. I find myself constantly returning to anecdotes, positions, and points of view that I came across with Jared Spool.</p>
                    <p>You’re hands down the biggest influence on my own career.</p>
                    <span><b>- UX Researcher and Designer </b></span> */}
                    {children}
                </div>
            </div>
        </section>

    )

}