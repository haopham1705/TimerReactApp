import React from 'react';

import styles from  './DisplayHour.module.css'

function DisplayHour(props) {

    const {hour} = props

    return (
        <div className={styles.display_time}>
            {
            hour.length === 0 ?
                '00'    
            :
            hour < 10  && hour[1] == '' ?
                '0' + hour[0]
                    :
                    hour < 10 && hour[1] != '' && hour[0] != '0' ?
                        '0' + hour
                    :
                        hour
            }
        </div>
    );
}

export default DisplayHour;