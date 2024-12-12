import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { fetchData } from './GoogleSheets.jsx';
import ReactMarkdown from 'react-markdown';

export default function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setEvents(data);
        };

        getData();
    }, []);

    return (
        <div id="Calendar">
            <div className="calendar-container">
                {events.map((event, index) => (
                    <div className="eventCard" key={event.id}>
                        <img className="eventImg" src={event.src} alt={event.name} />
                        <div className="eventDate">{event.date}</div>
                        <div className="eventName">{event.name}</div>
                        {event.special && <div className="eventSpecial">SPECIAL EVENT</div>}
                        <div className="eventDesc">
                            <ReactMarkdown >
                                {event.rich}
                            </ReactMarkdown>
                        </div>
                        <div className="classTime">Class {event.classTime}</div>
                        <div className="sessionTime">Session {event.sessionTime}</div>
                        <div className="location">{event.location}</div>
                        <div className="price">Price: {event.price}</div>
                    </div>

                    
                ))}
            </div>
        </div>
    );
}