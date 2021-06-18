import React from 'react'

const ToDo = ({task, index}) => {
    return (
        <li key={index}>{task}</li>
    )
}

export default ToDo