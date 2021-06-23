import React, { Component } from 'react';

class NewTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: '',
        }
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value })
    }

    handleAdd = () => {
        this.props.handleAdd(this.state.userInput);
        this.setState({ userInput: '' })
    }

    render(){
        return (
            <>
                <input value={this.state.userInput} onChange={this.handleChange}/>
                <button onClick={this.handleAdd}> Add </button>
            </>
        )
    }
}

export default NewTask;