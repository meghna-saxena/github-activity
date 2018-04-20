import React, { Component } from 'react';
import axios from 'axios';
import './Repos.css';

class Repos extends Component {
    state = {
        userName: '',
        repos: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/meghna-saxena')
            .then(response => {
                // const data = response.data.slice(0, 5);
                // this.setState({ repos: data })
                const userName = response.data.name 
                console.log(response);

                this.setState({userName: userName})
            });
    }

    render() {
        // const repositories = this.state.repos
        return (
            <div>
                <section className="Name">
                    {/* {repositories.toString()} */}
                    {this.state.userName}
                </section>
            </div>
        );
    }
}

export default Repos;