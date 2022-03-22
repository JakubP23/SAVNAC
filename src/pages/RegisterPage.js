// import React from 'react'
import React, { useEffect, useState } from "react";

import Axios from 'axios'
import { Link } from 'react-router-dom'

import '/Users/kuba2001/Desktop/savnac/my-app/src/App.css'



export default function SignUpPage() {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost5000/register', {
            username: usernameReg, 
            password: passwordReg
    }).then((response) => {
        console.log(response);
    });
    };


    return (
        <div className="text-center m-5-auto">
            <h2>Register</h2>
            <h5>Student or Faculty</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required onChange={(e) => {setUsernameReg(e.target.value);
                    }}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={(e) => {setemailReg(e.target.value);
                    }}/>
                </p> 
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={(e) => {setPasswordReg(e.target.value);
                    }}/> 
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button onclick = {register} id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
         
        </div>
    )

}
