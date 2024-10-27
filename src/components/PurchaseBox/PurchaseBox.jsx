import React from "react";

import "./PurchaseBox.css"


export default function PurchaseBox({ src, text, buttonText }) {
    return (
        <div className="purchase-box">

            <img src={src} alt="computer" />
            <p><b>{text}</b></p>
            <button className="btn-shadow btn purchase-box-button"><a className="purchase-box-button-white" href="https://essentials.centercentre.com/metrics">{buttonText}</a></button>

        </div>


    )


}