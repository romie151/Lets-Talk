import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register'
import { Link, Route, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/register' component={Register}/>
        </Switch>
    );
  }
}

export default App;
