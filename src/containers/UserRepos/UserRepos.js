import React, { Component } from 'react';
import axios from 'axios';
import './UserRepos.css';

// class Repos extends Component {
    // state = {
    //     userName: '',
    //     repos: []
    // }

    // componentDidMount() {
    //     axios.get('https://api.github.com/users/meghna-saxena')
    //         .then(response => {
    //             // const data = response.data.slice(0, 5);
    //             // this.setState({ repos: data })
    //             const userName = response.data.name 
    //             console.log(response);

    //             this.setState({userName: userName})
    //         });
    // }

    // render(props) {
        // const repositories = this.state.repos
//         return (
//             <div>
//                 <section className="Name">
//                     {repositories.toString()}
//                     {props.name}
//                 </section>
//             </div>
//         );
//     }
// }

// export default Repos;

const UserRepos = (props) => {
 return <div>{props.name}</div>
}

export default UserRepos;