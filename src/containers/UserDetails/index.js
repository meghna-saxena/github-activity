import React, { Component } from 'react';
import './UserDetails.css';
import axios from 'axios';

class UserDetails extends Component {
    state = {
        personalDetails: {},
        repos: []
    };

    componentDidMount() {
        const user = this.props.match.params.name;
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                const name = response.data.name;
                const bio = response.data.bio;
                const location = response.data.location;
                this.setState({
                    // bio: { name, bio, location }
                    personalDetails: {name, bio, location}
                })
            });

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                this.setState({ repos: response.data.slice(0, 5) })
            });
    }

    render() {
        console.log("In render", this.state);
        let repositories = undefined;
        if (this.state.repos) {
            repositories = this.state.repos.map(repo =>
                <li>{repo.name}</li>
            );
        }

        return (
            <div>
                {this.state.personalDetails.name}
                {this.state.personalDetails.bio}
                {this.state.personalDetails.location}
                {repositories}
            </div>
        );
    }
}

export default UserDetails;