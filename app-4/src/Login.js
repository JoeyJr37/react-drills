import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.loginUser = this.loginUser.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    usernameChange(e){
        this.setState({ username: e.target.value })
    }

    passwordChange(e){
        this.setState({ password: e.target.value })
    }

    loginUser(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return (
            <>
                <input value={this.state.username} onChange={this.usernameChange}/>
                <input value={this.state.password} onChange={this.passwordChange} />
                <button onClick={this.loginUser}> ADD </button>
            </>
        )
    }
}

export default Login