import React, { useState, useRef, useEffect } from 'react';
import { Circle } from 'progressbar.js'
import { Button } from 'semantic-ui-react';

const clockStates = {
    RUN: 'run',
    PAUSE: 'pause',
    STOP: 'stop',
    RESTART: 'restart',
};

export const ChronometerPage = () => {
    const [time, setTime] = useState(0);
    const [clockState, setClockState] = useState(clockStates.STOP);
    const [toogleRestart, setToogleRestart] = useState(true);
    const interval = useRef(null);
    const circle = useRef(null);

    function removeInterval(progress) {
        //if(interval.current == null) return false;
        clearInterval(interval.current);
        interval.current = null;
        circle.current.animate(progress);
        return true;
    }

    useEffect(() => {
        circle.current = new Circle("#progress", {
            color: '#BCF013',
            duration: 1000,
            easing:"linear",
            strokeWidth: 5,
            trailWidth: 3,
            trailColor: '#2E2E2E',
        });
    }, []);

    useEffect(() => {
        console.log(`clock state: ${clockState}`);
        switch(clockState){
            case clockStates.RUN:
                circle.current.animate(1);
                if(interval.current != null) return;
                interval.current = setInterval(() => {
                    setTime(time => time + 1);
                }, 1000);
                break;
            case clockStates.PAUSE:
                removeInterval(0);
                break;
            case clockStates.STOP:
                setTime(0);
                removeInterval(0);
                break;
            case clockStates.RESTART:
                setTime(0);
                if(removeInterval(1)){
                    interval.current = setInterval(() => {
                        setTime(time => time + 1);
                    }, 1000);
                }
                break;
        }
    }, [clockState, toogleRestart])

    function start() {
        setClockState(clockStates.RUN);
    };

    function pause() {
        setClockState(clockStates.PAUSE);
    }

    function stop() {
        setClockState(clockStates.STOP);
    }

    function restart() {
        setClockState(clockStates.RESTART);
        setToogleRestart(!toogleRestart);
    }

    function padTime(time){
        return time.toString().padStart(2, '0');
    }

    const minutes = padTime(Math.floor(time / 60));
    const seconds = padTime(time - minutes * 60);

    return (
        <div className="workspace">
        <h1 className="page-title">Chronometer</h1>
        <div className="clock">
            <div className="progress-bar" id="progress"></div>
            <div className="status-container">
            <div className="status"><p>{minutes}:{seconds}</p></div>
            </div>
        </div>
        <div className="controls">
            <Button inverted color='green' icon="play"
                className="control-button" onClick={start} />
            <Button inverted color='green' icon="pause"
                className="control-button" onClick={pause} />
            <Button inverted color='green' icon="stop"
                className="control-button" onClick={stop} />
            <Button inverted color='green' icon="redo"
                className="control-button" onClick={restart} />
        </div>
        </div>
    );
}