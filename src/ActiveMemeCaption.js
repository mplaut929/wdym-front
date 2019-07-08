import React from "react";


export default class ActiveMemeCaption extends React.Component {


  render(){
    return (
      <div>
        {this.props.meme ? <img src={this.props.meme.url}/> : "hi"}
        {this.props.caption ? this.props.caption.title : "bye"}
      </div>
    )
  }


}
