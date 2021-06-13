import React from 'react'

export default function Minute(props) {

    const {minute} = props

    return (
        <div className="styles.digit_timer">
            {
                minute.length === 0 ? '00' :
                    minute < 10 && minute[1] == '' ? '0' + minute[0] :
                        minute < 10 && minute[1] != '' && minute[0] != '0' ?
                            '0' + minute : minute
            }
        </div>
    )
}
