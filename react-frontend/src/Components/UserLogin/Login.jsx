import React, { Component } from 'react';
import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="LoginPage">
        <h1>Lets Talk</h1>
        <div id="inputContainer">
          <p>First Name</p>
          <input type="text"/>
          <p>Last Name</p>
          <input type="text"/>
          <p>E-mail</p>
          <input type="text"/>
          <p>Password</p>
          <input type="password"/>
          <input type="submit"/>
        </div>
      </div>
    )
  }
};
