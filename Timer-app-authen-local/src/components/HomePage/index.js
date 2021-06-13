import React, {useState, useEffect } from 'react';

import './HomePage.css'
import Display from './Display/index'
import Timer from './Timer/index'
import LogControl from './LogControl/index'

function HomePage(props) {

    const {onLogOut} = props

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [resetHour, setResetHour] = useState('');
    const [resetMinute, setResetMinute] = useState('');
    const [resetSecond, setResetSecond] = useState('');
    const [time, setTime] = useState('');
    const [isTimed, setIsTimed] = useState(false);
    const [isCounting, setIsCounting] = useState(false);
    
    const handleGetTime = (inputTime) => {
    if (!isTimed) {
        setTime(inputTime)
        setHour(time.slice(4,6))
        setMinute(time.slice(2,4))
        setSecond(time.slice(0,2))
        }
    }

    const handleFormatTime = () => {
        setIsTimed(true)
        formatTime(second, minute, hour)
        setResetHour(hour)
        setResetMinute(minute)
        setResetSecond(second)
    }

    const formatTime = (inputSecond, inputMinute, inputHour) => {
        if(inputSecond > 60 && inputMinute > 60){
            const offsetMinute = Math.floor(inputSecond / 60);
            const offsetHour = Math.floor(inputMinute / 60);
            if(inputHour){
                inputHour = parseInt(inputHour) + offsetHour
            }else{
                inputHour = offsetHour;
            }
            inputMinute = inputMinute - 60 + offsetMinute
            inputSecond = inputSecond - 60
            setHour(inputHour)
            setMinute(inputMinute)
            setSecond(inputSecond)
            return;
    }

    if(inputSecond > 60){
        const offsetMinute = Math.floor(inputSecond / 60);
        if(inputMinute){
            inputMinute = parseInt(inputMinute) + offsetMinute
        }else{
            inputMinute = offsetMinute
        }
        inputSecond = inputSecond - 60
    }

    if(inputMinute > 60){
        const offsetHour = Math.floor(inputMinute / 60);
            if(inputHour){
                inputHour = parseInt(inputHour) + offsetHour
            }else{
                inputHour = offsetHour 
            }
                inputMinute = inputMinute - 60
        }
        setHour(inputHour)
        setMinute(inputMinute)
        setSecond(inputSecond)
    }

    const handleResetTime = () => {
        setIsCounting(false)
        formatTime(resetSecond, resetMinute, resetHour)
    }

    const handleBackClicked = () => {
        setIsTimed(false); 
        setIsCounting(false)
    }

    const handleCountStatus = () => {
        if(second){
            setIsCounting(!isCounting);
        }
    }

    const countDownTime = () => {
        if(second == 0 && minute == 0 && hour > 0 && isCounting){
            setSecond(59)
            setMinute(59);
            setHour(hour - 1);
            return;
        }
        if(second == 0 && minute > 0 && isCounting){
            setSecond(59);
            setMinute(minute - 1);
            return;
        }
    }

    useEffect(() => {
        const secondTimeout = setTimeout(() => {
            if (isCounting && time != '000000') {
                setSecond(second - 1);
            } else {
                clearTimeout(secondTimeout);
            }
        }, 1000);

    return () => {
        if(hour == 0 && minute == 0 && second === 0){
            setIsCounting(false);
            setSecond("");
            setMinute("");
            setHour("");
        }
            countDownTime();
            clearTimeout(secondTimeout);
        }
    }, [second,minute,hour,isCounting])

    return (
        <div>
            <LogControl onLogOut={onLogOut}/>
            <Display 
                hour={hour}
                minute={minute}
                second={second}/>
            <Timer
                onCheckTime={time} 
                onGetTime={handleGetTime}
                onFormatTime={handleFormatTime}                        
                isTimed={isTimed}                        
                onBack={handleBackClicked}
                onCountStatus={handleCountStatus}
                isCounting={isCounting}
                onResetTime={handleResetTime}/>
        </div>
    );
}

export default HomePage;