import React from "react";
import './CourseSchedule.css'
import Calendar from '../Calendar/CalendarOct';


export default function CourseSchedule() {
    return (
        <section className='courseSchedule'>
            <h2>Outcome-Driven UX Metrics: <br />
                Your Online Course Schedule</h2>
            <h4>8 Hours live with Jared Spool in small group coaching, plus 8 hours of recorded content.</h4>
            <p>During each of this course’s four weeks, you’ll cover two of the eight topics. For each topic, you’ll watch a lecture recording and join Jared in a live small-group coaching session.</p>
            <p>The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members.
            </p>
            <p>In each coaching session, you’ll work directly with Jared and your fellow cohort members to identify your own metrics and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.
            </p>
            <p>We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your Outcome-driven UX metrics.
            </p>
            <p>We know that schedules are tough, so we record every coaching session with Jared. If you miss a session, or you just want to review what you discussed, you’ll have access to the recordings for 6 months after the course ends. (You can also watch the recordings from other cohorts, to hear how they worked through their biggest challenges.)</p>
            {/* <span>Here are the eight Outcome-driven UX Metrics topics:</span> */}
            {/* <ul>
                <li>Align Your Teams to Great UX with UX Outcomes</li>
                <li>Reach Your Objectives with Your UX Success Metrics</li>
                <li>Eliminate the Costs of Poor UX with Problem-Value Metrics</li>
                <li>Achieve Key Results with Your UX Progress Metrics</li>
                <li>Raise UX’s Visibility with Outcome-driven UX Metrics</li>
            </ul> */}
            {/* <span>Every session is recorded. <br />
                You’ll have access to the recordings for 8 weeks.</span> */}
            <h1>Course Schedule</h1>
            <Calendar />
        </section>

    )


}