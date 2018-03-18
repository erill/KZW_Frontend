import React, { Component } from 'react';

import Nav from './Navigation/nav';
// import Login from '../containers/Login/login';
import Register from '../containers/Register/register';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Login /> */}
        <Register />
      </div>
    );
  }
}