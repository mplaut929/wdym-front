import React from 'react';


export default class Meme extends React.Component {

  handleClick = () => {
    this.props.handleMemeClick(this.props.meme)
  }

  render(){
    return(
      <li className="meme">
        <img src={this.props.meme.url} onClick={this.handleClick}/>
      </li>
    )
  }


}
