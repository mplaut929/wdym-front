import React from 'react';
import CaptionContainer from './CaptionContainer.js';
import MemeContainer from './MemeContainer.js';
import './App.css';

class App extends React.Component {

  state = {
    captions: [],
    memes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/captions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        captions: data
      })
    })

    fetch('http://localhost:3000/memes')
    .then(res => res.json())
    .then(data => {
      this.setState({
        memes: data
      })
    })
  }

  render(){
    return (
    <div>
      <CaptionContainer captions={this.state.captions}/>
      <MemeContainer captions={this.state.memes}/>
    </div>
    )
  }

}

export default App;
