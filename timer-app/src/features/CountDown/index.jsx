import React, { useEffect, useRef, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import DisplayTimers from '../../components/DisplayTimers'
import InputTimer from './components/InputTimer'
import "./CountDown.scss"

export default function CountDown(props) {

    // const {hour, minute, second} = props;
    // const Timer = styled.div`
    //     font-size: 12.5rem;
    //     font-weight: bold;
    //     font-family: 'Exo', sans-serif;
    //     color: var(--text-color);
    // `

    // const [countDown, setCountDown] = useState(0);
    // const [pause, setPause] = useState(false)
    // let timerData = []
    // const [timer, setTimer] = useState({
    //     hour: 10,
    //     minute: 10,
    //     second: 10
    // })
    // const { dataTimer, pause } = props

    // let intervalRef = useRef()

    // useEffect(() => {

    //     if(pause && countDown >= 0){
    //         intervalRef.current = setInterval(() => {
    //             setCountDown(c => c - 1);
    //         }, 1000);
        

    //     return () => clearInterval(intervalRef.current);
    //     }else {
    //         intervalRef.current = 0
    //         clearInterval(intervalRef.current)
    //     }
    // }, []);

    // const handleClickStart = () => {
    //     if (!pause) {
    //         clearInterval(intervalRef.current)
    //     } else {
    //         intervalRef.current = setInterval(() => {
    //             setCountDown(c => c - 1);
    //         }, 1000);
    //     }

    //     setPause((isActive) => !isActive)
    // }
    // const handleClickReset = () => {
    //     timerData = []
    //     clearInterval(intervalRef.current)
    //     setCountDown(0)
    //     setPause(false)
    // }
    // const  = (e) => {
    //     timerData.push(e.target.value)
    //     for (const e of timerData) {
    //         intervalRef.current += e
    //     }
    //     setCountDown(intervalRef.current);
    // }



//    let  timerInterval = setInterval( () => {
        // check if we are odd or even and append class to timer
        // odd = !odd;
        // if (odd) {
        //     timer.classList.add("odd");
        // } else {
        //     timer.classList.remove("odd");
        // }
 
            // (minute < 10 ? "0" + minute : minute)  
            // (second < 10 ? "0" + second : second);
 
    //     if (second == 0) { 
    //         if (minute === 0) {
    //             if(hour === 0){ 
    //                 clearInterval(timerInterval);
    //                 alert("Time is up!");
    //             }
    //             hour--;
    //         }
    //         minute--;
    //         second = 60;
    //     }
    //     second--;
    // }, 1000);

    return (
        <div className="container countdown-content">
            <h1 className="countdown-content__title">Coundown Timer</h1>

            {/* <Timer>{countDown}</Timer> */}
            <DisplayTimers
                hour ={'0'}
                minute ={'0'}
                second ={'0'}
            />

            <InputTimer />
            <div className="btn btn-back"><Link to='/home'><p className="btn">Back to Home</p></Link></div>

        </div>
    )
}
