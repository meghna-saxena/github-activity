import React from 'react';

const userCommits = (props) => {
    return(
    <div className="user-commits" onClick={props.clicked}>
        <h1>{props.name}</h1>
    </div>
    )
};


export default userCommits;