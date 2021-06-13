import React from 'react'
import styles from './DisplayMillisecond.module.css'

export default function DisplayMillisecond(props) {
    return (
        <div className={styles.displayTimer}>
            {/* <span className={styles.digits}>
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} :
            </span>
            <span className={styles.digits}>
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} :
            </span> */}
            <span className={styles.digits +' '+ styles.miliSec}>
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}
