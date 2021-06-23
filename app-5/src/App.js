import React, { Component } from 'react';
import Image from './Image.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeImage: 'https://i.pinimg.com/736x/b0/81/0f/b0810f05663b8a260401690210085cb4.jpg'
    }
  }

  render(){
    return (
      <div className='App'>
        <Image imgUrl={this.state.activeImage} />
      </div>
    )
  }
}

export default App;
