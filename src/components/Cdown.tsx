import * as React from "react"; 
import { useEffect, useState } from "react";
import './Cdown.css'
import moment from 'moment';





const Cdown = () =>  {
    const [seconds, setSeconds] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    const [days, setDays] = useState('');
    const timeTillDate = "12 05 2021, 1:00 am"
    const timeFormat = "MM DD YYYY, h:mm a"

    useEffect(() => {
        setTimeout(() => {
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then.valueOf() - now.valueOf());
            setSeconds(countdown.format('ss'));
            setMinutes(countdown.format('mm'));
            setHours(countdown.format('HH'));
            setDays(countdown.format('D'));
          }, 1000);

    }, [seconds, minutes, hours, days])

    


    return (
        <div>
            <h1>Time Til Mint</h1>
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