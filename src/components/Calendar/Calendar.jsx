import React, { useState } from "react";
import './Calendar.css';
import { EVENT_info } from '../../const'

export default function Calendar() {
    return (
        <div className="calendar-container">
            <div className='calendar'>
                {EVENT_info.map((data, index) => {
                    return (
                        <div className='eventCard'>
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
                })}
            </div>
        </div>
    );
}