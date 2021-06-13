import React from 'react';

import styles from  './DisplayMinute.module.css'

function DisplayMinute(props) {

    const {minute} = props

    return (
        <div className={styles.display_time}>
            {
            minute.length === 0 ?
                '00'    
            :
            minute < 10  && minute[1] == '' ?
                '0' + minute[0]
                    :
                    minute < 10 && minute[1] != '' && minute[0] != '0' ?
                        '0' + minute
                    :
                        minute
            }
        </div>
    );
}

export default DisplayMinute;