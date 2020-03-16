import React from 'react';

const User = (props) => {
    console.log(props);
    return (
        <div>
            <h2>hi</h2>
    <h3>{props.user}</h3>
        </div>
    );
};

export default User;