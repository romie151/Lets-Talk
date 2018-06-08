import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input type="text"/>
        <p>First Name</p>
        <input type="text"/>
        <p>Last Name</p>
        <input type="text"/>
        <p>E-mail</p>
        <input type="text"/>
        <p>Password</p>
        <input type="text"/>
        <p>Re-Enter Password</p>
        <input type="button" value="submit"/>
      </div>
    )
  }
}
