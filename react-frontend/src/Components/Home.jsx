import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Register from './Register';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Let's Talk</h1>
        <img></img>
        <p>Have an account</p>
        <p>Log In</p>
        <p>UserName</p>
        <input type="text"></input>
        <p>Password</p>
        <input type="password"></input>
        <br/>
        <input type="button" value="Submit"></input>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
        {/* <Register/>  */}
      </div>
    )
  }
}
