import React from 'react'
import Hour from './DigitsTimer/Hour'
import Minute from './DigitsTimer/Minute'
import Second from './DigitsTimer/Second'
// import SecondMilis from './DigitsTimer/SecondMilis'
import styles from './DisplayTimers.module.css'


export default function DisplayTimers(props) {
    const { hour, minute, second } = props

    return (
        <div className={styles.container}>
            <Hour hour={hour} /> <span className={styles.colon_timer}>:</span> <Minute minute={minute} /><span className={styles.colon_timer}>:</span>  <Second second={second} />

            {/* <div className={styles.milis_style}><SecondMilis milliSecond={millisecond} /></div> */}

        </div>
    )
}
