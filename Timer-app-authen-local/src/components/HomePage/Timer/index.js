import React from 'react';

import styles from './Timer.module.css'
import ControlTimer from './components/ControlTimer/index'
import SetTimer from './components/SetTimer/index'

function Timer(props) {

    const {onCheckTime, onGetTime, onFormatTime, isTimed, onBack, onClear, onCountStatus, isCounting, onResetTime} = props

    return (
        <div className={styles.container_timer}>
            {
            isTimed ?
                <ControlTimer 
                    onBack={onBack}
                    onCheckTime={onCheckTime}
                    onCountStatus={onCountStatus}
                    isCounting={isCounting}
                    onResetTime={onResetTime}/>
            :
                <SetTimer 
                    onGetTime={onGetTime}
                    onFormatTime={onFormatTime}
                    onClear={onClear}/>
            }
        </div>
    );
}

export default Timer;