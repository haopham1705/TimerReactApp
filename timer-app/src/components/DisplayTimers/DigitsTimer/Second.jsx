import React from 'react'
import styles from '../DisplayTimers.module.css'

Second.propTypes = {}
export default function Second(props) {
    const { second } = props
    return (
        <div className={styles.digit}>{second}</div>
    )
}
