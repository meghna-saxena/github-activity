import React, { Component } from 'react';
import UserLogin from './containers/UserLogin';
import UserDetails from './containers/UserDetails';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch>
          <Route path="/" exact component={UserLogin} />
          <Route path="/details/:name" component={UserDetails}/>}/>
        </Switch> */}
        <UserLogin />
      </BrowserRouter>
    );
  }
}

export default App;
