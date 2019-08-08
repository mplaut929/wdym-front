import React from 'react';
// import Caption from './Caption.js'

export default class CaptionContainer extends React.Component {





  handleClick = () => {
    this.props.handleCaptionClick(this.props.captions[Math.floor(Math.random()*this.props.captions.length)]);
    this.props.handleClickCounter()
  }

  render(){
    return (
      <div className="captions">
        {this.props.clicks < 5 ?
          <button onClick={this.handleClick}>Get Caption!</button> :
          <button disabled> Hand is full!</button>}
      </div>
      // <div>
      //   <ul>
      //     {this.props.captions.map((caption) => {
      //       return <Caption key={caption.id} caption={caption} handleCaptionClick={this.props.handleCaptionClick}/>
      //     })}
      //   </ul>
      // </div>
    )
  }



}
