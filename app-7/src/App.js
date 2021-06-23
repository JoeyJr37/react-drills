import React, { Component } from 'react';
import './App.css';

import NewTask from './NewTask.js';
import List from './List.js';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      taskList: [],
    }
  }

  addTask = (todo) => {
    this.setState((state) => {
      return {
        taskList: [...state.taskList, todo]
      }
    });
  }

  render(){
    return (
      <div className='App'>
        <h1> My to-do list: </h1>
        <NewTask handleAdd={this.addTask}/>
        <List taskList={this.state.taskList}/>
      </div>
    )
  }
}

export default App;
