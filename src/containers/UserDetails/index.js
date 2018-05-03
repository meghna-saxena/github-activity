import React, { Component } from 'react';
import './UserDetails.css';
import axios from 'axios';
import Repo from '../../components/Repo';

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
                    personalDetails: { name, bio, location }
                })
            });

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                this.setState({ repos: response.data.slice(0, 5) })
            });
    }

    showCommits = (repoName) => {
        const url = `https://api.github.com/repos/${this.props.match.params.name}/${repoName}/commits`;
        console.log(url)
        axios.get(url)
            .then(response => {
                console.log(response.data);
                // this.setState({commits: response.commit.message})
            });
    }

    render() {
        console.log("In render", this.state);
        let repositories = undefined;
        if (this.state.repos) {
            repositories = this.state.repos.map(repo => (
                <Repo
                    key={repo.name}
                    name={repo.name}
                    commitUrl={`https://api.github.com/repos/${this.props.match.params.name}/${repo.name}/commits`}
                />
            )
            );
        }

        return (
            <div className="main">
                <div className="column">
                    <div className="name">
                        {this.state.personalDetails.name}
                    </div>
                    <br />
                    <div className="others">
                        {this.state.personalDetails.bio}
                        <br />
                        {this.state.personalDetails.location}
                    </div>
                </div>
                <div className="column repo">
                    <ul>
                        {repositories}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserDetails;