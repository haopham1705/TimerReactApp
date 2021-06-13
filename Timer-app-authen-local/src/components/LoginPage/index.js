import React, {useState} from 'react';

import './LoginPage.css'

function LoginPage(props) {

    const {onLogin} = props

    const [username, setUsername] =  useState('')
    const [password, setPassword] =  useState('')

    const getUsername = (inputUsername) => {
        setUsername(inputUsername.target.value)
    }

    const getPassword = (inputPassword) => {
        setPassword(inputPassword.target.value)
    }

    const validateUser = () => {
        if ((username !== '') && (password !== '')){
            if ((username === 'admin') && (password === 'admin')){
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                onLogin(username, password)
            } 
        } 
    }


    return (
        <div className='signin'>  
            <div>
                <div>
                    <label>Username</label>
                    <input onChange={getUsername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={getPassword} type="password"/>
                </div>
                <div>
                    <button onClick={validateUser}>Log In</button>
                    {
                        props.isLoggedIn ?
                            <div></div>
                        :
                            <div className="warning">Please enter correct username and password</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default LoginPage;