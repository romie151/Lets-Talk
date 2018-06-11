import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div id="Home_Photo_Container">
          <img id="home-photo" src="https://images.unsplash.com/photo-1518882095374-cf178783cdc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4038fa8f6f5cfc32fc239f5827b64d7&auto=format&fit=crop&w=1316&q=80" />
        </div>
        <div id="Login_Container" alt="">
          <h1>Let's Talk</h1>
          <img></img>
          <p>Have an account</p>
          <p>Log In</p>
          <p>UserName</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="password"></input>
          <br />
          <input type="button" value="Submit"></input>
          <p>Don't have an account?</p>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    )
  }
}
