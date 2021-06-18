import React, { Component } from 'react';
import './App.css';
import Image from './components/Image.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeImage: 'https://rb.gy/nrquiy'
    }
  }

  render(){
    return (
      <div className='App'>
        <Image imgUrl={this.state.activeImage}/>
      </div>
    )
  }
}

export default App;
