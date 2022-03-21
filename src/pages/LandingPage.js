import React from 'react'
import { Link } from 'react-router-dom'

import '/Users/kuba2001/Desktop/savnac/my-app/src/App.css'
import BackgroundImage from '/Users/kuba2001/Desktop/savnac/my-app/src/assets/images/back.jpg'

export default function LandingPage() {
    return (
        <div className="">
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Savnac</h1>
            <p className="main-para text-center">Montclair University State</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="log_btn"><span>Log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "1px solid"
}