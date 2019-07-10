import React from 'react';
// import Meme from './Meme.js'

export default class MemeContainer extends React.Component {

  handleClick = () => {
    this.props.handleMemeClick(this.props.memes[Math.floor(Math.random()*this.props.memes.length)])
  }

  render(){
    return (
      <div className="memes">
        <button onClick={this.handleClick}>Meme</button>
      </div>
      // <div className="memes">
      //   <ul className="meme-grid">
      //     {this.props.memes.map((meme) => {
      //       return <Meme key={meme.id} meme={meme} handleMemeClick={this.props.handleMemeClick}/>
      //     })}
      //   </ul>
      // </div>
    )
  }



}
