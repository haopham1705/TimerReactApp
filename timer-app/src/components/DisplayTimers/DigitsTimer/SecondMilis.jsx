import React from 'react'
import styles from '../DisplayTimers.module.css'

SecondMilis.propTypes = {}
export default function SecondMilis(props) {
    const { millisecond } = props
    console.log(millisecond)
    return (
        <div className={styles.milisecond_style}>
            {millisecond}
        </div>

    )
}
//  ? millisecond : "00"