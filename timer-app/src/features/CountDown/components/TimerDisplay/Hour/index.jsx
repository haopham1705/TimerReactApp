import React from 'react'
import styles from '../DisplayCountDown.module.css'

export default function Hour(props) {
    const {hour} = props

    return (
        <div className="styles.digit_timer">
            {
                hour.length === 0 ? '00' :
                    hour < 10 && hour[1] == '' ? '0' + hour[0] :
                        hour < 10 && hour[1] != '' && hour[0] != '0' ?
                            '0' + hour : hour
            }
        </div>
    )
}
