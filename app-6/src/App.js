import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      task: '',
      taskList: [],
    }
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value })
  }

  addTask = () => {
    this.setState((state) => {
      return { taskList: [...state.taskList, state.task]}
    });
    this.setState({ task: ''});
  }

  render(){
    return (
      <div className='App'>
        <h1> My to-do list: </h1>
        <input 
          onChange={this.handleChange}
          value={this.state.task}/>
        <button
          onClick={this.addTask}
          >ADD</button>
        {this.state.taskList.map((task, i) => <ToDo task={task} index={i} />)}
      </div>
    )
  }
}


export default App;
