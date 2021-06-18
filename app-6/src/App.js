import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo.js'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      task: '',
      taskList: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);

  }

  handleChange(e){
    this.setState({ task: e.target.value })
  }
  addTask(){
    this.setState((state)=>{
      return {
        taskList: [...state.taskList, state.task]
      }
    });
    this.setState({ task: ' '});
  }
  render(){
    return (
      <div className='App'>
        <h1> My to-do list: </h1>
        <input value={this.state.task} onChange={this.handleChange} />
        <button onClick={this.addTask}>Add</button>
        {this.state.taskList.map((task, i)=> <ToDo i={i} task={task} /> )}
      </div>
      
    )
  }
}
export default App;
