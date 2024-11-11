import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { fetchData } from './GoogleSheets.jsx';
import ReactMarkdown from 'react-markdown';
// import { EVENT_info } from '../../const'

// START :::: VERSION 2 (API CALL VERSION)
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
        <div className="calendar-container">
            <div className="calendar">
                {events.map((event, index) => (
                    <div className="eventCard" key={event.id}>
                        <img className="eventImg" src={event.src} alt={event.name} />
                        <div className="eventDate">{event.date}</div>
                        <div className="eventName">{event.name}</div>
                        {event.special && <div className="eventSpecial">SPECIAL EVENT</div>}
                        <div className="eventDesc">
                            <ReactMarkdown>
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
// END :::: VERSION 2 (API CALL VERSION)






// ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
// ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
// ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE


// START :::: VERSION 1 (LOCAL VERSION)
// export default function Calendar() {
//     return (
//         <div className="calendar-container">
//             <div className='calendar'>
//                 {EVENT_info.map((data, index) => {
//                     return (
//                         <div className='eventCard' >
//                             <img className="eventImg" src={data.src} />
//                             <div className="eventDate">{data.date}</div>
//                             <div className="eventName">{data.eventName}</div>
//                             {data.special && <div className="eventSpecial">SPECIAL EVENT</div>}
//                             <div className="eventDesc">{data.eventDesc}</div>
//                             <div className="classTime">Class {data.classTime}</div>
//                             <div className="sessionTime">Session {data.sessionTime}</div>
//                             <div className="location">{data.location}</div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// END :::: VERSION 1 (LOCAL VERSION)