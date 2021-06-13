import React from 'react';

import styles from './Display.module.css'
import DisplayHour from './components/DisplayHour/index'
import DisplayMinute from './components/DisplayMinute/index'
import DisplaySecond from './components/DisplaySecond/index'

function Display(props) {

    const {hour, minute, second} = props

    return (
        <div className={styles.container_display}>
            <DisplayHour hour={hour}/> : 
            <DisplayMinute minute={minute}/> : 
            <DisplaySecond second={second}/> 
        </div>
    );
}

export default Display;