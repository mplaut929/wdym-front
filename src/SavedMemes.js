import React from 'react';



export default class SavedMemes extends React.Component {

  state = {
    savedMemes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/meme_captions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        savedMemes: data
      })
    })
  }


  render(){
    console.log(this.state)
    return (
      <div>
        {this.state.savedMemes.map((savedMeme) => {
          return (
            <div>
              <img src={savedMeme.meme.url}/>
              {savedMeme.caption.title}
            </div>
          )
        })}
      </div>

    )
  }
}
