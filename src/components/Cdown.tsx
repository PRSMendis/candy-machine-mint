import * as React from "react"; 
import { useEffect, useState } from "react";
import './Cdown.css'
import moment from 'moment';





const Cdown = () =>  {
    const [seconds, setSeconds] = useState(1);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const timeTillDate = "12 05 2021, 1:00 am"
    const timeFormat = "MM DD YYYY, h:mm a"

    useEffect(() => {
        console.log('render')
        const timer = setTimeout(() => {
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then.valueOf() - now.valueOf());
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

          }, 1000);

    }, [])

    


    return (
        <div>
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                <div className="countdown-item">
                    {days}
                    <span>days</span>
                </div>
                <div className="countdown-item">
                    {hours}
                    <span>hours</span>
                </div>
                <div className="countdown-item">
                    {minutes}
                    <span>minutes</span>
                </div>
                <div className="countdown-item">
                    {seconds}
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
}

export default Cdown;