import React, { Component } from 'react';
import Repos from './containers/Repos';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    userName: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then(response => {
        const name = response.data.name
        console.log(response);

        this.setState({ userName: name })
      });
  }

  nameChangedHandler = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="w3-container w3-orange" style={{ textAlign: "center" }}>
          <h2><strong>See Your Github!</strong></h2>
        </div>
        <div className="App" style={{ textAlign: "center" }}>

          <label>User Name</label><br />
          <input type="text" className="UserName" placeholder="Your name.." /><br />

          <input type="submit" value="Submit" onChange={this.nameChangedHandler} />
        </div>
      </div>
    );
  }
}

export default App;
