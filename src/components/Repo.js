import React, { Component } from 'react';
import axios from 'axios';
import './Repo.css';

class Repo extends Component {
    state = { commits: null };

    showCommits() {
        if (!this.state.commits) {
            return;
        }
        return this.state.commits.map(commit =>
            <li>{commit}</li>
        )
    }

    fetchCommits = (url) => {
        console.log(url)
        axios.get(url)
            .then(response => {
                const sortedCommits = response.data.slice(0, 5);
                this.setState({ commits: sortedCommits.map(i => i.commit.message) });
            }
        );
    } 

    render() {
        const commits = this.showCommits();
        return (
            <div className="user-repos" onClick={() => this.fetchCommits(this.props.commitUrl)}>
            <input id="show" type="checkbox" />
            <label for="show">{this.props.name}</label>
            <span  id="content">{commits}</span>
                {/* <h1>{this.props.name}</h1>
                <p className="user-commits">{commits}</p> */}
            </div>
        );
    }
}

export default Repo;