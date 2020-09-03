import React, { useState, useEffect, useRef } from 'react';
import { Circle } from 'progressbar.js'
//import '../App.css';

export const HomePage = () => {
    const fixedStartTime = 3;
    const [time, setTime] = useState(fixedStartTime);
    const circle = useRef(null);

    useEffect(() => {
        circle.current = new Circle("#progress", {
            color: '#BCF013',
            duration: fixedStartTime * 1000,
            easing:"linear",
            strokeWidth: 5,
            trailWidth: 3,
            trailColor: '#2E2E2E',
        });

        circle.current.animate(1);

        setInterval(() => {
            setTime(time => {
                if(time > 0) {
                    return time - 1;
                } else {
                    setTime(fixedStartTime);
                    circle.current.set(0);
                    circle.current.animate(1);
                    return 0;
                }
            })
        }, 1000);
    }, []);

    return (
        <div className="workspace">
        <h1 className="page-title">React Chronometer</h1>
        <div className="clock">
            <div className="progress-bar" id="progress"></div>
            <div className="status-container">
            <div className="status"><p>{time}</p></div>
            </div>
        </div>
        </div>
    );
}