import React, { Component } from 'react';

import Login from '../containers/Login/login';
import Register from '../containers/Register/register';
import Nav from './Navigation/nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
        <Register />
      </div>
    );
  }
}