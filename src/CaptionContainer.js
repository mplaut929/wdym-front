import React from 'react';
// import Caption from './Caption.js'

export default class CaptionContainer extends React.Component {


  handleClick = () => {
    this.props.handleCaptionClick(this.props.captions[Math.floor(Math.random()*this.props.captions.length)])
  }

  render(){
    return (
      <div className="captions">
        <button onClick={this.handleClick}>Caption</button>
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
