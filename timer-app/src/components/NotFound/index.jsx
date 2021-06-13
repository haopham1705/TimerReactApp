import React from 'react'
import {Route, Link } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import './NotFound.scss'

export default function NotFound() {

    return (
        <div className="container wrapper">
            
            <h1>Page Not Found</h1>
            <p>We can't find the page you're looking.</p>
            <p>You can either return to the previous page, visit our homepage.</p> 
            <Link to='/home'><p className="btn">Back to Home</p></Link>
        
            {/* <Route path='/home' component={HomePage}/> */}
           
            

        </div>
    )
}
