import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render(){
    return (
      <div className='App'>
        {this.state.data.map((item, i) => {
          return (<p key={i}>{item}</p>)
        })}
      </div>
    )
  }
}

export default App
