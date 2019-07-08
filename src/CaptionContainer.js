import React from 'react';
import Caption from './Caption.js'

export default class CaptionContainer extends React.Component {

  render(){
    return (
      <div>
        <ul>
          {this.props.captions.map((caption) => {
            return <Caption key={caption.id} caption={caption} handleCaptionClick={this.props.handleCaptionClick}/>
          })}
        </ul>
      </div>
    )
  }



}
