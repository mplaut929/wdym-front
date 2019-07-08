import React from 'react';


export default class Meme extends React.Component {

  render(){
    console.log(this.props)
    return(
      <li>{this.props.meme.title}</li>
    )
  }


}
