import React from 'react';
import Meme from './Meme.js'

export default class MemeContainer extends React.Component {

  render(){
    return (
      <div>
        <ul className="meme-grid">
          {this.props.memes.map((meme) => {
            return <Meme key={meme.id} meme={meme} handleMemeClick={this.props.handleMemeClick}/>
          })}
        </ul>
      </div>
    )
  }



}
