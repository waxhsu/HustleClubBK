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
                            <img src={data.src} />
                            <div className="eventDate">{data.date}</div>
                            <div className="eventSpecial">{data.special}</div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}