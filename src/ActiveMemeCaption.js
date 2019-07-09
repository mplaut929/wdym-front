import React from "react";


export default class ActiveMemeCaption extends React.Component {


  render(){
    return (
      <div className="play">
        {this.props.meme ? <img src={this.props.meme.url}/> : ""}
        {this.props.caption ? this.props.caption.title : ""}
      </div>
    )
  }


}
