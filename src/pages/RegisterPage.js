// import React, { Component } from 'react'
import React, { useState } from "react";
// import { register } from './UserFunctions'
import { Link } from 'react-router-dom'
// import React from 'react'
import Axios from 'axios'


import '/Users/kuba2001/Desktop/savnac/my-app/src/App.css'




export default function SignUpPage() {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost3001/register', {
            username: usernameReg, 
            password: passwordReg
    }).then((response) => {
        console.log(response);
    });
    };


// class Register extends Component {
//     constructor() {
//       super()
//       this.state = {
//         Username: '',
//         email: '',
//         password: '',
//         errors: {}
//       }
  
//       this.onChange = this.onChange.bind(this)
//       this.onSubmit = this.onSubmit.bind(this)
//     }
  
//     onChange(e) {
//       this.setState({ [e.target.name]: e.target.value })
//     }
//     onSubmit(e) {
//       e.preventDefault()
  
//       const newUser = {
//         Username: this.state.Username,
//         email: this.state.email,
//         password: this.state.password
//       }
  
//       register(newUser).then(res => {
//         this.props.history.push(`/login`)
//       })
//     }
  
//     render() {

    // return (
    //     <div className="text-center m-5-auto">
    //         <h2>Register</h2>
    //         <h5>Student or Faculty</h5>
    //         <form action="/home">
    //             <p>
    //                 <label>Username</label><br/>
    //                 <input
    //                 type="text"
    //                 className="form-control"
    //                 name="Username"
    //                 placeholder="Enter your Username"
    //                 value={this.state.Username}
    //                 onChange={this.onChange}
    //                 />               
    //             </p>
    //             <p>
    //                 <label for = "email" >Email address</label><br/>
    //                 <input
    //               type="email"
    //               className="form-control"
    //               name="email"
    //               placeholder="Enter email"
    //               value={this.state.email}
    //               onChange={this.onChange}
    //             />
    //             </p> 
    //             <p>
    //                 <label>Password</label><br/>
    //                 <input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               placeholder="Password"
    //               value={this.state.password}
    //               onChange={this.onChange}
    //             />
    //             </p>
    //             <p>
    //                 <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
    //             </p>
    //             <p>
    //                 <button id="sub_btn" type="submit">Register</button>
    //             </p>
    //         </form>
    //         <footer>
    //             <p><Link to="/">Back to Homepage</Link>.</p>
    //         </footer>
         
    //     </div>
    // )

    // }

        return (
            <div className="text-center m-5-auto">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form action="/home">
                    <p>
                        <label>Username</label><br/>
                        <input type="text" onChange = {(e) => {setUsernameReg(e.target.value); }} name="first_name" required />
                    </p>
                    <p>
                        <label>Email address</label><br/>
                        <input type="email" onChange = {(e) => {setEmailReg(e.target.value); }} name="email" required />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" onChange = {(e) => {setPasswordReg(e.target.value); }} name="password" requiredc />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit" onClick={register} > Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        )
    
    }
