import React, { Component } from 'react';
import './App.css';
import List from './components/List.js';
import NewTask from './components/NewTask.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      taskArray: [],
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task){
    this.setState((state)=>{
      return { taskArray: [...state.taskArray, task]}
    })
  }

  render(){
    console.log('taskArray', this.state.taskArray);

    return (
      <div className='App'>
        <h1>My to-do list: </h1>
        <NewTask addTask={this.addTask} />
        <List myList={this.state.taskArray}/>
      </div>
    )
  }
}

export default App;
