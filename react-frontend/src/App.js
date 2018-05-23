import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Components/UserLogin/Home';
import Login from './Components/UserLogin/Login'
import Register from './Components/UserLogin/Register'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    );
  }
}

export default App;
