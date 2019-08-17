import React from "react";


export default class ActiveMemeCaption extends React.Component {


  handleClick = () => {
    fetch("http://localhost:3000/meme_captions", {
      method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({
        meme_id: this.props.meme.id,
        caption_id: this.props.caption.id
      })
    })
    alert("Meme saved successfully!")
  }


  render(){
    return (
      <div className="play">
        {this.props.meme ? <img className= "activeMeme" src={this.props.meme.url}/> : ""}
        {this.props.caption ? this.props.caption.title : ""}
        {this.props.meme && this.props.caption ? <button onClick={this.handleClick}>Save Meme</button> : ''}
      </div>
    )
  }


}
