import React, { Component } from 'react'

class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(function(prevState) {
      if(prevState.mood === "happy"){
        return {mood: "sad"}
      } else {
        return {mood: "happy"}
      }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  } 

}

export default SimpleComponent
