import React, { useState } from "react";
import './Calendar.css';
import { HARDCORE_DETAILS_DECEMBER } from './CalendarData'
import { COHORT_DATE_RANGE_DECEMBER } from './CalendarData'
import playButton1 from './playButton1.png'
import playButton2 from './playButton2.png'

export default function Calendar() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleDetails = (index) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="calendar-container">
            <div className='calendar'>
                <h2>Cohort: {COHORT_DATE_RANGE_DECEMBER[0].start} - {COHORT_DATE_RANGE_DECEMBER[0].end}</h2>
                {HARDCORE_DETAILS_DECEMBER.map((classInfo, index) => {
                    return (
                        <div className='test123' key={index}>
                            <div id='scheduleCard'>
                                <div id='WeekNUM'>
                                    <div className='weekInfo'>Week {classInfo.weekNum} of 4</div>



                                    {/* Odd Numbered Topic */}
                                    <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index)}>
                                        <div className='mobile-row'>
                                            <img src={playButton1} className={`scheduleIconImg ${expandedSections[index] ? 'rotated' : ''}`} alt='playButton1' />
                                            <div className='classTitle'>{classInfo.topicTitle1}</div>
                                        </div>
                                        <div>
                                            <div className='clickDetails'>Topic Details</div>
                                        </div>
                                    </div>

                                    {expandedSections[index] && (
                                        <>
                                            <div className='topicDetails'>
                                                <ul>{classInfo.topicDetails1_1}</ul>
                                                <ul>{classInfo.topicDetails1_2}</ul>
                                                <ul>{classInfo.topicDetails1_3}</ul>
                                                <li>{classInfo.topicDetails1_bullet1}</li>
                                                <li>{classInfo.topicDetails1_bullet2}</li>
                                                <li>{classInfo.topicDetails1_bullet3}</li>
                                            </div>
                                        </>
                                    )}

                                    <div id='optionalTitle' className='subTitle'>
                                        <div className='optionDate'>{classInfo.topicTitle1_date1}</div>
                                        <div className='optionTitle'>{classInfo.topicTitle1_title1}</div>
                                    </div>
                                    <div id='liveTopicTitle' className='subTitle'>
                                        <div className='optionDate'>{classInfo.topicTitle1_date2}</div>
                                        <div className='optionTitle'>{classInfo.topicTitle1_title2}</div>
                                    </div>
                                    {/* END Odd Numbered Topic */}


                                    {/* START Even Numbered Topic */}
                                    <div id='evenTopicNumber' className='headerTitle' onClick={() => toggleDetails(index + 0.1)}>
                                        <div className='mobile-row'>
                                            <img src={playButton2} className={`scheduleIconImg ${expandedSections[index + 0.1] ? 'rotated' : ''}`} alt='playButton2' />
                                            <div className='classTitle'>{classInfo.topicTitle2}</div>
                                        </div>
                                        {/* <div>   */}
                                        <div className='clickDetails'>Topic Details</div>
                                        {/* </div> */}
                                    </div>

                                    {expandedSections[index + 0.1] && (
                                        <>
                                            <div className='topicDetails'>
                                                <ul>{classInfo.topicDetails2_1}</ul>
                                                <ul>{classInfo.topicDetails2_2}</ul>
                                                <ul>{classInfo.topicDetails2_3}</ul>
                                                <li>{classInfo.topicDetails2_bullet1}</li>
                                                <li>{classInfo.topicDetails2_bullet2}</li>
                                                <li>{classInfo.topicDetails2_bullet3}</li>
                                            </div>
                                        </>
                                    )}

                                    <div id='optionalTitle' className='subTitle'>
                                        <div className='optionDate'>{classInfo.topicTitle2_date1}</div>
                                        <div className='optionTitle'>{classInfo.topicTitle2_title1}</div>
                                    </div>
                                    <div id='liveTopicTitle' className='subTitle'>
                                        <div className='optionDate'>{classInfo.topicTitle2_date2}</div>
                                        <div className='optionTitle'>{classInfo.topicTitle2_title2}</div>
                                    </div>
                                    {/* END Even Numbered Topic */}

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}