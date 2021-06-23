import React from 'react';

const Todo = ({ i, task }) => {
    return (
        <>
            <p key={i}>{task}</p>
        </>
    )
}

export default Todo