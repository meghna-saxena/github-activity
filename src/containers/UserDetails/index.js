import React from 'react';
import './UserDetails.css';

const UserDetails = (props) => {
    console.log(props.match.params.name);
    return <div className="UserDetails">
        User Details {props.match.params.name} dikh ja!
    </div>
}

export default UserDetails;