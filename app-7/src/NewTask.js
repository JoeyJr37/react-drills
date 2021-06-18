import React, { Component } from 'react';

class NewTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            task: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e){
        this.setState({ task: e.target.value })
    }

    handleAdd(){
        this.props.addTask(this.state.task);
        this.setState({ task: ''})
    }

    render(){
        return (
            <>
                <input value={this.state.task} onChange={this.handleChange}/>
                <button onClick={this.handleAdd}> ADD </button>
            </>
        )
    }
}

export default NewTask