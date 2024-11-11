import React, { useState } from "react";
import './Instagram.css';
// import { EVENT_info } from '../../const'

export default function Instagram() {
    return (
        <div className="instagram-container">
            <div className='instagram'>
                <h1>INSTAGRAM API (REFER TO AIRTABLE TEMPLATE)</h1>
                {/* {EVENT_info.map((data, index) => {
                    return (
                        <div className='instagramCard'>
                            <img className="eventImg" src={data.src} />
                            <div className="eventDate">{data.date}</div>
                            <div className="eventName">{data.eventName}</div>
                            {data.special && <div className="eventSpecial">SPECIAL EVENT</div>}
                            <div className="eventDesc">{data.eventDesc}</div>
                            <div className="classTime">Class {data.classTime}</div>
                            <div className="sessionTime">Session {data.sessionTime}</div>
                            <div className="location">{data.location}</div>
                        </div>
                    );
                })} */}
            </div>
        </div>
    );
}