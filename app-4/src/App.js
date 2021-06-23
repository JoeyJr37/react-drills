import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUserChange = (e) => {
    this.setState({ username: e.target.value })
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  loginUser = () => {
    alert(`Username: ${this.state.username}, Password: ${this.state.password}`);
  }

  render(){
    return (
      <div className='App'>
        <input value={this.state.username} onChange={this.handleUserChange}/>
        <input value={this.state.password} onChange={this.handlePasswordChange}/>
        <button onClick={this.loginUser}> Login </button>
      </div>
    )
  }

}

export default App;
