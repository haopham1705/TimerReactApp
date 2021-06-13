import React from 'react'
import styles from '../DisplayTimers.module.css'

Hour.propTypes = {}
export default function Hour(props) {
    const {hour} = props
    return (
        <div className={styles.digit}>{hour}</div>
    )
}
