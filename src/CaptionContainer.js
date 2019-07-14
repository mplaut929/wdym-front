import React from 'react';
// import Caption from './Caption.js'

export default class CaptionContainer extends React.Component {

  state = {
    clicks: 0
  }




  handleClick = () => {
    this.props.handleCaptionClick(this.props.captions[Math.floor(Math.random()*this.props.captions.length)]);
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render(){
    return (
      <div className="captions">
        {this.state.clicks < 5 ?
          <button onClick={this.handleClick}>Caption</button> :
          <button disabled>Caption</button>}
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
