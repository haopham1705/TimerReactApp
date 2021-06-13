import React from 'react';

import styles from  './ControlTimer.module.css'

function ControlTimer(props) {

    const {onCheckTime, onBack, onCountStatus, isCounting, onResetTime} = props

    return (
        <div className={styles.container}>
            <div className={styles.container_control}>
                <div>
                    {
                        isCounting && onCheckTime != '000000' ?
                            <button className={styles.pause} onClick={onCountStatus}>Pause</button>
                        :
                            <button className={styles.start} onClick={onCountStatus}>Start</button>
                    }
                </div>   
                <button onClick={onResetTime}>Reset</button>
            </div>
            <button onClick={onBack} >Back</button>
        </div>
    );
}

export default ControlTimer;