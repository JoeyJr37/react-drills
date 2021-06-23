import React from 'react';

const Todo = ({ i, todo }) => {
    return (
        <>
            <p key={i}>{todo}</p>
        </>
    )
}

export default Todo