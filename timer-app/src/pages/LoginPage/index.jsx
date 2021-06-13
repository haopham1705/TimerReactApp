import React, { useState } from 'react'
import './LoginPage.scss'

export default function LoginPage(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { onLogin } = props

    const getUsername = (username_value) => {
        setUsername(username_value.target.value)
    }
    const getPassword = (password_value) => {
        setPassword(password_value.target.value)
    }

    const validateUser = () => {
        if ((username !== '') && (password !== '')) {
            if ((username === 'admin') && (password === 'admin')) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                onLogin(username, password)
            }
        }
    }

    return (
        <div className="wrapper-form fadeInDown">
            <div className="formContent">
                <div className="fadeIn first">
                    <img className="formContent__icon" src="http://haopham.co/img/logo_livef.png" id="icon" alt="User Icon" />
                </div>
                <h1 className="active"> Sign In </h1>
                {/* <h2 className="inactive underlineHover">Sign Up </h2>  */}

                {/* Login Form */}
                <form>
                    <input type="text" onChange={getUsername} id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="password" onChange={getPassword} id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" onClick={validateUser} className="fadeIn fourth" defaultValue="Log In" />
                    {
                        props.isLoggedIn ?
                            <div></div>
                            :
                            <div className="warning">Please enter correct username and password</div>
                    }
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a> <br />
                    Not a member? <a className="underlineHover" href="#">Sign Up Now!</a>
                </div>
            </div>
        </div>
    )
}
