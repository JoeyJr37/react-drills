import React from 'react';

const ToDo = ({i, task}) => {
    return <p key={i}>{task}</p>;
}

export default ToDo