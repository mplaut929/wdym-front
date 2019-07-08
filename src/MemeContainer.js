import React from 'react';
import Meme from './Meme.js'

export default class MemeContainer extends React.Component {

  render(){
    return (
      <div>
        <ul>
          {this.props.memes.map((meme) => {
            return <Meme key={meme.id} meme={meme}/> 
          })}
        </ul>
      </div>
    )
  }



}
