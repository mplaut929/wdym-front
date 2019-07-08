import React from 'react';
import CaptionContainer from './CaptionContainer.js';
import './App.css';

class App extends React.Component {

  state = {
    captions: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/captions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        captions: data
      })
    })
  }

  render(){
    return (
    <div>
      <CaptionContainer captions={this.state.captions}/>
    </div>
    )
  }

}

export default App;
