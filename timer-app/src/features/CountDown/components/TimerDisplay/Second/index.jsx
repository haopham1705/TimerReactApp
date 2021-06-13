import React from 'react'

export default function Second(props) {
    const {second} = props
    return (
        <div className="styles.digit_timer">
            {
                second.length === 0 ? '00' :
                    second < 10 && second[1] == '' ? '0' + second[0] :
                        second < 10 && second[1] !== '' && second[0] != '0' ?
                            '0' + second : second
            }
        </div>
    )
}
