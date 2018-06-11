import React, { Component } from 'react';
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav id="navBar">
            <p id="nav-title-home">Home</p>
            <p id="nav-title-message">Message</p>
            <p id="nav-title-profile">Profile</p>
        </nav>
        <div id="Store_Container">
            <p id="store-snapshot">Snapshot of Points and Menu goes here</p>
        </div>
        <div id="Discussion_Preview">
            <p id="discussion-snapshot">Start a discussion Preview goes here</p>
        </div>
        <div id="Join_Discussion_Preview">
            <p id="discussion-snapshot">Discussion Preview will go here</p>
        </div>
        <div id="Topics_Joined">
            <marquee id="topics-marquee">Topics all ready joined will go here</marquee>
        </div>
      </div>
    )
  }
}
