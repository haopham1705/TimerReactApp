import React from 'react';
import './LogControl.scss'

function LogControl(props) {

    const { onLogOut } = props

    return (
        <div className="logControl-content">
            <h2>Admin</h2>
            <button className="btn" onClick={onLogOut}>Log out</button>
        </div>
    );
}

export default LogControl;