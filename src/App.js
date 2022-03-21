import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from '/Users/kuba2001/Desktop/savnac/my-app/src/pages/LandingPage.js'
import LoginPage from '/Users/kuba2001/Desktop/savnac/my-app/src/pages/LoginPage.js'
import RegisterPage from '/Users/kuba2001/Desktop/savnac/my-app/src/pages/RegisterPage.js'
import ForgetPasswordPage from '/Users/kuba2001/Desktop/savnac/my-app/src/pages/ForgetPasswordPage.js'
import HomePage from '/Users/kuba2001/Desktop/savnac/my-app/src/pages/HomePage.js'

import '/Users/kuba2001/Desktop/savnac/my-app/src/App.css'

const App = () => {
        return (
        <Router>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                </Routes>
                <Footer />
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Created by <a href="#" target="_blank" rel="noopener noreferrer">Savnac Team</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}

export default App;
