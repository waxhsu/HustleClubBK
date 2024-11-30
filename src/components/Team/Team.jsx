import React, { useEffect, useState } from 'react';
import './Team.css';
// import { fetchData } from './GoogleSheets.jsx';
import ReactMarkdown from 'react-markdown';

// TEAM_info is for VERSION 1
import { TEAM_info } from '../../const'



/////////////////////////////////////////////
///////////// ISSUES RIGHT NOW  /////////////
// NEED TO FIND OUT A WAY TO PUBLISH CMS of IMAGE FILES
/////////////////////////////////////////////
/////////////////////////////////////////////

// START :::: VERSION 2 (API CALL VERSION)
// export default function Team() {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const data = await fetchData();
//             setEvents(data);
//         };

//         getData();
//     }, []);

//     return (
//         <div className="team-container">
//             <div className="team">
//                 {events.map((team, index) => (
//                     <div className="teamCard" key={team.id}>
//                         <img className="teamImg" src={team.src} alt={team.name} />
//                         <div className="teamDate">{team.date}</div>
//                         <div className="teamName">{team.name}</div>
//                         {team.special && <div className="teamSpecial">SPECIAL team</div>}
//                         <div className="teamDesc">
//                             <ReactMarkdown >
//                                 {team.rich}
//                                 </ReactMarkdown>
//                         </div>
//                         <div className="classTime">Class {team.classTime}</div>
//                         <div className="sessionTime">Session {team.sessionTime}</div>
//                         <div className="location">{team.location}</div>
//                         <div className="price">Price: {team.price}</div>
//                     </div>

                    
//                 ))}
//             </div>
//         </div>
//     );
// }
// END :::: VERSION 2 (API CALL VERSION)






// START :::: VERSION 1 (LOCAL VERSION)
export default function Team() {
    return (
        <div className="team-container">
            <div className='team'>
                {TEAM_info.map((data) => {
                    return (
                        <div className='teamCard' key={data.id}>
                            <img className="teamImg" src={data.src} />
                            <div className="teamName">{data.name}</div>
                            <div className="teamTitle">{data.title}</div>
                            <div className="teamDesc">{data.desc}</div>
                            <a className="teamLink" href={data.link}>contact link??</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// END :::: VERSION 1 (LOCAL VERSION)