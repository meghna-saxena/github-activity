import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './UserLogin.css';
import UserDetails from '../UserDetails';

class UserLogin extends Component {
    state = {
        userName: null,
        detailsFetched: null
    }

    onSubmitHandler = (event) => {
        this.setState({ userName: this.refs.username.value, detailsFetched: true });
    }

    render() {
        if (this.state.detailsFetched) {
            const url = "details/" + this.refs.username.value;
            return <Redirect to={url} />
        }

        return (
            <div>
                <div className="row">
                    <div className="heading">
                        <h2><strong>Check Your Github</strong></h2>
                    </div>
                    <div className="UserLogin">
                        <label>User Name</label><br />
                        <input type="text" className="UserName" placeholder="Your name.." ref="username" /><br />
                        <button className="Submit" onClick={this.onSubmitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;