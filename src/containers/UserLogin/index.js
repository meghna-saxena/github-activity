import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'; 
import axios from 'axios';
import './UserLogin.css';
import UserDetails from '../UserDetails';


class UserLogin extends Component {
    state = {
        userName: "",
        bio: "",
        location: "",
        detailsFetched: null
    }

    onSubmitHandler = (event) => {
        const name = this.refs.username;
        
        this.setState({ userName: name.value });

        axios.get(`https://api.github.com/users/${name.value}`)
            .then(response => {
                debugger;
                console.log(response.data);
                const name = response.data.name;
                const bio = response.data.bio;
                const location = response.data.location;
                this.setState({
                    userName: name,
                    bio: bio,
                    location: location,
                    detailsFetched: true
                })
                // this.props.history.push('/details');  // <- method 1, if using withRouter; https://tylermcginnis.com/react-router-programmatically-navigate/
            });
    }

    render() {
        if(this.state.detailsFetched) {
            const url = "details/" + this.state.userName;
            return <Redirect to={url} />
        }
        return (
            <div>
                <div className="w3-container w3-orange" style={{ textAlign: "center" }}>
                    <h2><strong>See Your Github!</strong></h2>
                </div>
                <div className="UserLogin">
                    <label>User Name</label><br />
                    <input type="text" className="UserName" placeholder="Your name.." ref="username" /><br />
                    <button className="Submit" onClick={this.onSubmitHandler}>Submit</button>
                </div>
            </div>
        );
    }
}

// export default withRouter(UserLogin);
export default UserLogin;