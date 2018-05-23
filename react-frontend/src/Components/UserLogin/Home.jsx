import React, { Component } from 'react';
import './Home.css'
import { Redirect } from 'react-router';
import axios from 'axios';

export default class Home extends Component {
  state = { user: undefined }
  getUser = () => {
      axios
      .get('/user/getinfo')
      .then(res => {
          this.setState({
              user: res.data.user.username
          })
      }).catch(err => {
          this.setState({
              user: null
          })
      })
  }
  componentDidMount() {
      this.getUser();
  }
  render() {
      const { user } = this.state
     
      if (user) {
          console.log('User detected')
          return <Redirect to='/user/dashboard' />
      } else if (user === null) {
          return <Redirect to='/login' />
      }
      return (
          <span>loading...</span>
      )
  }
};
