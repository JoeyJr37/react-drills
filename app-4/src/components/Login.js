import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUserNameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  loginUser = () => {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render(){
    return (
      <div>
        <input
          onChange={this.handleUserNameChange}
          value={this.state.username} />
        <input
          onChange={this.handlePasswordChange}
          value={this.state.password} />
        <button
            onClick={this.loginUser}
            > LOGIN </button>
      </div>
    )
  }
}

export default Login;