import React from 'react';


export default class Caption extends React.Component {

  render(){
    console.log(this.props)
    return(
      <li>{this.props.caption.title}</li>
    )
  }


}
