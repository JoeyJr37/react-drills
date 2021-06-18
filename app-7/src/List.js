import React from 'react';
import ToDo from './ToDo.js'

const List = ({myList}) => {
    return (
        myList.map((task, i) => {
            return <ToDo task={task} i={i} />
        })
    )
}

export default List