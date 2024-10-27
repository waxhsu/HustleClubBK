import React from "react";
import './LandingArticle.css'


export default function LandingArticle({ children }) {
    return (
        <section className="LandingArticle">
            <div className="LandingArticle-content">
                {children}
            </div>
        </section>

    )
}



//   <p>To get real results we can measure. We need to focus on the real needs of our customers and users.</p>
//                 <p>Everything we do and measure should be outcome-based. No more measuring for measuring sake. </p>