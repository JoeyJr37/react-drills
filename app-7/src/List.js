import React from 'react'
import ToDo from './ToDo.js'

const List = ({myList})=> {
    return (
        myList.map((task, i) => <ToDo task={task} i={i} /> )
    )
}

export default List