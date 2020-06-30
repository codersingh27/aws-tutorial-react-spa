import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={Home} />
      
    </Router>
  );
}

export default App;
