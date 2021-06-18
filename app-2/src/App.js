import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }

  }

  render(){
    return (
      <div className='App'>
        {this.state.list.map((item, i)=> <h2 key={i}>{item}</h2>)}
      </div>
    )
  }
}

export default App;
