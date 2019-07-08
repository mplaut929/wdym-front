import React from 'react';
import CaptionContainer from './CaptionContainer.js';
import MemeContainer from './MemeContainer.js';
import ActiveMemeCaption from './ActiveMemeCaption.js'
import './App.css';

class App extends React.Component {

  state = {
    captions: [],
    memes: [],
    activeMeme: null,
    activeCaption: null
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

  handleMemeClick = (meme) => {
    this.setState({
      activeMeme: meme
    })
  }
  handleCaptionClick = (caption) => {
    this.setState({
      activeCaption: caption
    })
  }

  render(){
    console.log(this.state)
    return (
    <div className="app">
      <CaptionContainer captions={this.state.captions} handleCaptionClick={this.handleCaptionClick}/>
      <MemeContainer memes={this.state.memes} handleMemeClick={this.handleMemeClick}/>
      <ActiveMemeCaption caption={this.state.activeCaption} meme={this.state.activeMeme}/>
    </div>
    )
  }

}

export default App;
