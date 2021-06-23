import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }
  render(){
    const filteredList = this.state.data.filter(item => item.includes(this.state.userInput));

    return (
      <div className='App'>
        <input value={this.state.userInput} onChange={this.handleChange}/>
        {filteredList.map((item, i) => {
          return ( <h2 key={i}>{item}</h2>)
        })}
      </div>
    )
  }
}

export default App