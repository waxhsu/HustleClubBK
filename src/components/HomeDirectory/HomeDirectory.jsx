import React from "react";
import './HomeDirectory.css'



export default function HomeDirectory({ children }) {
    return (
        <section className="homeDirectory">
            <div className="homeDirectory-content">
                {children}
            </div>
        </section >

    )

}
