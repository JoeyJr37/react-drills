import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bolongna', 'cheese'],
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render(){

    const filteredList = this.state.list.filter(item => item.includes(this.state.userInput));


    return (
      <div className='App'>
        <input 
          onChange={this.handleChange}
          value={this.state.userInput}/>
        {filteredList.map((item, i) => <h2 key={i}>{item}</h2>)}
      </div>
    )
  }
}

export default App;
