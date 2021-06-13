import React from 'react';

import styles from './LogControl.module.css'

function LogControl(props) {
    
    const {onLogOut} = props
    
    return (
        <div className={styles.logcontrol}>
            <h2>Admin</h2>
            <button onClick={onLogOut}>Log out</button> 
        </div>
    );
}

export default LogControl;