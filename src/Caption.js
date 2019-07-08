import React from 'react';


export default class Caption extends React.Component {

  handleClick = () => {
    this.props.handleCaptionClick(this.props.caption)
  }

  render(){
    return(
      <li onClick={this.handleClick}>{this.props.caption.title}</li>
    )
  }


}
