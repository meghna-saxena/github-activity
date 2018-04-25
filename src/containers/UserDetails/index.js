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
                    personalDetails: { name, bio, location }
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
            <div class="main">
                <div class="column">
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
                <div class="column repo">
                <ul>
                {repositories}
                </ul>
                </div>
            </div>












            // <div className="main">
            //     <div class="col span-1-of-2 personal-details">
            //         {/* <div className="personal-details"> */}
            //         <div className="name">
            //             {this.state.personalDetails.name}
            //         </div>
            //         <br />
            //         <div className="others">
            //             {this.state.personalDetails.bio}
            //             <br />
            //             {this.state.personalDetails.location}
            //         </div>
            //         {/* </div> */}
            //     </div>
            //     <div class="col span-1-of-2 repo">
            //         {repositories}
            //     </div>
            // </div>
        );
    }
}

export default UserDetails;