import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todoList: [],
      todo: '',
    }
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        todoList: [...state.todoList, state.todo]
      }
    });
    this.setState({ todo: '' });
  }

  render(){
    return (
      <div className='App'>
        <h1>My to-do list: </h1> 
        <input value={this.state.todo} onChange={this.handleChange}/>
        <button onClick={this.handleClick}> Add </button>
        {this.state.todoList.map((task, i) => {
          return (<Todo todo={task} key={i}/>)
        })}
      </div>
    )
  }
}

export default App;
