import React from "react";
import HandCaption from './HandCaption.js'


export default class Hand extends React.Component {


  render(){
    console.log(this.props)
    return (
      <div className="hand">
      <ul>
        {this.props.captions.map((caption) => {
          return <HandCaption key={caption.id} caption={caption} handleCaptionClick={this.props.handleCaptionClick}/>
        })}
      </ul>
      </div>
    )
  }


}
