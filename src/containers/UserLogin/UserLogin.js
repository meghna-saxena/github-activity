import React, { Component } from 'react';
import axios from 'axios';
import './UserLogin.css';
import UserRepos from '../UserRepos/UserRepos';

class UserLogin extends Component {
    state = {
        userName: ""
    }

    onSubmitHandler = (event) => {
        const name = this.refs.username;
        console.log(this.refs, name.value);
        this.setState({ userName: name.value });

        axios.get(`https://api.github.com/users/${name.value}`)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <div className="w3-container w3-orange" style={{ textAlign: "center" }}>
                    <h2><strong>See Your Github!</strong></h2>
                </div>
                <div className="User">
                    <label>User Name</label><br />
                    <input type="text" className="UserName" placeholder="Your name.." ref="username" /><br />
                    <button className="Submit" onClick={this.onSubmitHandler}>Submit</button>
                </div>
                <UserRepos name={this.state.userName} />
            </div>
        );
    }
}

export default UserLogin;