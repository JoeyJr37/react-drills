import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      userInput: '',
    }
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render(){
    return (
      <div className='App'>
        <input 
          onChange={this.handleChange}
          value={this.state.userInput}/>
        <h2>{this.state.userInput}</h2>
      </div>
    )
  }
}


export default App;
