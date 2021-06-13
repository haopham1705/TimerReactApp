import React from 'react'
import styles from '../DisplayTimers.module.css'

Minute.propTypes = {}
export default function Minute(props) {
    const { minute } = props
    return (
        <div className={styles.digit}>{minute}</div>
    )
}
