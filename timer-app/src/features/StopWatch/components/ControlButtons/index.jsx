import React from 'react'
import './controlbutton.scss'

export default function ControlButtons(props) {
    const StartBtn = (
        <div className="btn btn-start" onClick={props.handleStart}>
            Start
        </div>
    )
    const ActiveBtn = (
        <div className="btn-group">
            <div className="btn btn-reset" onClick={props.handleReset}>
                Reset
            </div>
            <div className={props.isPaused? "btn btn-resume": "btn btn-pause"} onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div> 
    )
    return (
        <div className="control-btn">
            <div>{props.active ? ActiveBtn : StartBtn}</div>
        </div>
    )
}
