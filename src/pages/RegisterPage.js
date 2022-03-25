   
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


import '../App.css'

export default function SignUpPage() {
    
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [passwordError, setpasswordError] = useState("");
        const [emailError, setemailError] = useState("");
      
        const handleValidation = (event) => {
          let formIsValid = true;
      
          if (!email.match(/^\w+@[montclair]+?\.[edu]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid. Must be a @montclair.edu email");
            return false;
          } else {
            setemailError("");
            formIsValid = true;
          }
      
          if (!password.match(/^[a-zA-Z]{5,22}$/)) {
            formIsValid = false;
            setpasswordError(
              "Only Letters and length must best min 5 Chracters and Max 22 Chracters"
            );
            return false;
          } else {
            setpasswordError("");
            formIsValid = true;
          }
      
          return formIsValid;
        };
      
        const loginSubmit = (e) => {
          e.preventDefault();
          handleValidation();
        };
      
        return (
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <div className="col-md-4">
                  <form id="loginform" onSubmit={loginSubmit}>
                  <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="usernameinput"
                        name="usernameinput"
                        aria-describedby="userhelp"
                        placeholder="Pick Username"
                        // onChange={(event) => setpassword(event.target.value)}
                      />
                      {/* <small id="emailHelp" className="text-danger form-text">
                        {emailError}
                      </small> */}
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="EmailInput"
                        name="EmailInput"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <small id="emailHelp" className="text-danger form-text">
                        {emailError}
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <small id="passworderror" className="text-danger form-text">
                        {passwordError}
                      </small>
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">Check box</label>
                    </div>
                    <p>
                    <button id="sub_btn" type="submit">Register</button>
                    </p>
                  </form>
                </div>
                <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
              </div>
              
            </div>
           
          </div>
        );
      }


