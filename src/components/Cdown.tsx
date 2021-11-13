import * as React from "react"; 
import { useEffect, useState } from "react";
import './Cdown.css'

function Cdown() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    let interval = useRef();

    const startTimer = () => {
        const countdown_date = new Date('December 05, 2021, 00:00:00').getTime(); 

        interval = setInterval()
    }


    return (
        <div className="container">
            <h1 id="headline">Countdown to my birthday</h1>
            <div id="countdown">
                <ul>
                <li><span id="days">{seconds}</span>days</li>
                <li><span id="hours"></span>Hours</li>
                <li><span id="minutes"></span>Minutes</li>
                <li><span id="seconds"></span>Seconds</li>
                </ul>
            </div>
            <div id="content" className="emoji">
                <span>🥳</span>
                <span>🎉</span>
                <span>🎂</span>
            </div>
        </div>
    )
}

export default Cdown;