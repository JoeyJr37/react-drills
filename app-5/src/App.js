import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      image: 'https://rb.gy/nrquiy'
    }

  }
  render(){
    return (
      <div className='App'>
        <Image src={this.state.image} />
      </div>
    )
  }
}

export default App;
