import React from 'react';
import Todo from './Todo.js';

const List = ({taskList}) => {

    return (
        taskList.map((task, i) => {
            return (<Todo i={i} task={task} />)
          })
    )
}

export default List;