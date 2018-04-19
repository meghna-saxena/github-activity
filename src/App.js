import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    user: []
  }

  componentDidMount() {
      axios.get('https://api.github.com/users/meghna-saxena/repos')
          .then(response => {
              const user = response.data;
              // this.setState({ user: user })
              console.log(response);
          });
}

  render() {
    const user = this.state.user
    return (
      <div className="App">
        {/* {user} */}
      </div>
    );
  }
}

export default App;
