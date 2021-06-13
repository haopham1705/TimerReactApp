import React from 'react'

export default function InputTimer(props) {
    
    return (
        <div>
            <div className="number-pad">
                <div class="row">
                    <button className="btn-timer" value="5" >5</button>
                    <button className="btn-timer" value="6" >6</button>
                    <button className="btn-timer" value="7" >7</button>
                    <button className="btn-timer" value="8" >8</button>
                    <button className="btn-timer" value="9" >9</button>
                    <button className={props.pause ? "btn-timer btn-control start-timer-btn": "btn-timer btn-control pause-timer-btn"} >{ props.pause ? "Start" : "Pause"}</button>
                </div>

                <div class="row">
                    <button className="btn-timer" value="0" >0</button>
                    <button className="btn-timer" value="1" >1</button>
                    <button className="btn-timer" value="2" >2</button>
                    <button className="btn-timer" value="3" >3</button>
                    <button className="btn-timer" value="4" >4</button>
                    <button className="btn-timer btn-control muted" >Clear</button>
                </div>
            </div>
        </div>
    )
}
