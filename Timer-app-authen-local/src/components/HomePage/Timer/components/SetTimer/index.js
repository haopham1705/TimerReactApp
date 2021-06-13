import React, { useState } from 'react';

import styles from './SetTimer.module.css'

function SetTimer(props) {

    const {onGetTime, onFormatTime} = props

    const [inputKeyboard, setInputKeyboard] = useState('')

    onGetTime(inputKeyboard.slice(0,6))

    const clearInputTime = () => {
        setInputKeyboard('')
    }

    const handleButtonZero = () => {
        setInputKeyboard(inputKeyboard + '0')
    }
    const handleButtonOne = () => {
        setInputKeyboard(inputKeyboard + '1')
    }
    const handleButtonTwo = () => {
        setInputKeyboard(inputKeyboard + '2')
    }
    const handleButtonThree = () => {
        setInputKeyboard(inputKeyboard + '3')
    }
    const handleButtonFour = () => {
        setInputKeyboard(inputKeyboard + '4')
    }
    const handleButtonFive = () => {
        setInputKeyboard(inputKeyboard + '5')
    }
    const handleButtonSix = () => {
        setInputKeyboard(inputKeyboard + '6')
    }
    const handleButtonSeven = () => {
        setInputKeyboard(inputKeyboard + '7')
    }
    const handleButtonEigth = () => {
        setInputKeyboard(inputKeyboard + '8')
    }
    const handleButtonNine = () => {
        setInputKeyboard(inputKeyboard + '9')
    }

    return (
        <div>
            <div className={styles.container_button}>
                <button onClick={handleButtonFive}>5</button>
                <button onClick={handleButtonSix}>6</button>
                <button onClick={handleButtonSeven}>7</button>
                <button onClick={handleButtonEigth}>8</button>
                <button onClick={handleButtonNine}>9</button>
                <button onClick={onFormatTime}>Set</button>
            </div>    
            <div className={styles.container_button}>
                <button onClick={handleButtonZero}>0</button>
                <button onClick={handleButtonOne}>1</button>
                <button onClick={handleButtonTwo}>2</button>
                <button onClick={handleButtonThree}>3</button>
                <button onClick={handleButtonFour}>4</button>
                <button onClick={clearInputTime}>Clear</button>
            </div>    
        </div>
    );
}

export default SetTimer;