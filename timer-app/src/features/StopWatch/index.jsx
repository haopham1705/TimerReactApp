import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'

import ControlButtons from './components/ControlButtons'
import DisplayMillisecond from './components/DisplayMillisecond'
import DisplayTimers from '../../components/DisplayTimers'
import './StopWatch.scss'

export default function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0); 

    useEffect(() => {
        let interval = null
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [isActive, isPaused])

    // const timer = () => {
    //     if ((millisecond += 10) == 1000) {
    //         millisecond = 0;
    //         second++;
    //     }
    //     if (second == 60) {
    //         second = 0;
    //         minute++;
    //     }
    //     if (minute == 60) {
    //         minute = 0;
    //         hour++;
    //     }

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
    }
    const handlePauseResume = () => {
        setIsPaused(!isPaused)
    }
    const handleReset = () => {
        setIsActive(false)
        setTime(0)
    } 

    return (
        <div className="container stopwatch_content">
            <h1 className="stopwatch_content__title">Stop Watch</h1>
            <DisplayTimers
                hour={("0" + Math.floor(time / (60 * 60 * 1000))).slice(-2)}
                minute={("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                second={("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                />
            <DisplayMillisecond time={time} />
            
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset} />
            <div className=" btn-back"><Link to='/home'><p className="btn">Back to Home</p></Link></div>
        </div>
    )
}
