import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Home/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/register' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    );
  }
}

export default App;
