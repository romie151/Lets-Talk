import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div id="Registration_Photo_Container">
          <img id="registration-photo" src="https://images.unsplash.com/photo-1518882095374-cf178783cdc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4038fa8f6f5cfc32fc239f5827b64d7&auto=format&fit=crop&w=1316&q=80" />
        </div>
        <div id="Registration_Container">
          <h1>Sign Up</h1>
          <input type="text" />
          <p>First Name</p>
          <input type="text" />
          <p>Last Name</p>
          <input type="text" />
          <p>E-mail</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <p>Re-Enter Password</p>
          <Link to="/dashboard">Sign Up</Link>
        </div>
      </div>
    )
  }
}
