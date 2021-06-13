import React from 'react';
import PropTypes from 'prop-types';
import Time from '../Utils/Time';
import '../CountdownTimer.scss'

const Display = (props) => {

    const time = new Time();

    return (
        <div>
            {
                props.timeInterval && (
                    <div className="display-countdown">
                        {/* <div>
                            <label type="text" className="display-countdown-label"> HH </label>
                            <label type="text" className="display-countdown-label"> MM </label>
                            <label type="text" className="display-countdown-label"> SS </label>
                            <label type="text" className="display-countdown-label"> MS </label>
                        </div> */}
                        <div className="display-countdown-time">
                            {time.getTime(props.timeInterval)}
                        </div>
                    </div>
                )
            }

            {!props.timeInterval &&
                <div className="display-input">
                    <div>
                        {/* <div>
                            <label type="text" className="display-label"> HH </label>
                            <label type="text" className="display-label"> MM </label>
                            <label type="text" className="display-label"> SS </label>
                        </div> */}

                        <div className="input_timer">
                            <input type="text"
                                className="form-control display-time "
                                maxLength="2" placeholder="00"
                                onFocus={() => props.onFocusChange('HH')}
                                value={props.hours} onChange={props.onInputChange} />

                            <span className="display-time display-separator">:</span>

                            <input type="text"
                                className="form-control display-time  "
                                maxLength="2" placeholder="00"
                                onFocus={() => props.onFocusChange('MM')}
                                value={props.minutes} onChange={props.onInputChange} />

                            <span className="display-time display-separator">:</span>

                            <input type="text"
                                className="form-control display-time "
                                maxLength="2" placeholder="00"
                                onFocus={() => props.onFocusChange('SS')}
                                value={props.seconds} onChange={props.onInputChange} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

Display.defaultProps = {
    onFocusChange: input => console.log(input),
    onInputChange: () => { },
    hours: '00',
    minutes: '00',
    seconds: '00',
    timeInterval: null
};

Display.propTypes = {
    onFocusChange: PropTypes.func,
    onInputChange: PropTypes.func,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    timeInterval: PropTypes.number
};

export default Display;