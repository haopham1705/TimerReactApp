import React from 'react';

import styles from  './DisplaySecond.module.css'

function DisplaySecond(props) {
    
    const {second} = props

    return (
        <div className={styles.display_time}>
            {
                second.length === 0 ?
                    '00'    
                :
                second < 10  && second[1] == '' ?
                    '0' + second[0]
                        :
                        second < 10 && second[1] != '' && second[0] != '0' ?
                            '0' + second
                        :
                            second
            }
        </div>
    );
}

export default DisplaySecond;