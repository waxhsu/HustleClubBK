import React, { useEffect, useRef } from 'react';
import ReactIframe from 'react-iframe';
import "./SpiffyCheckout.css"


export default function SpiffyCheckout({ children }) {

    return (
        <div className="spiffyCheckout-box">
            <h2>Join the October UX Metrics Cohort</h2>

            {/* <spiffy-checkout url="https://centercentre.spiffy.co/checkout/ux-metrics-oct" ></spiffy-checkout> */}
            {children}

        </div>


    )
}


