import React, { Component } from 'react';
import UserLogin from './containers/UserLogin/UserLogin';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <UserLogin />
    );
  }
}

export default App;
