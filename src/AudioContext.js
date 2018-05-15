/**
 * @Author: Ali
 * @Date:   2018-05-14T09:30:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-15T19:58:45+02:00
 */
import React, {Component} from 'react'


class AudioContext extends Component {
  constructor(){
    super()
    this.state = {
      playing:false
    }
  }
  handlePlayPress(){
  if (!this.state.playing){
    this.state({
      playing:true
    })
  } else {
  this.state({
    playing:false
  })
  }
  }
  //web Audio initialization
  componentDid
  Mount(){
    this.context = new AudioContext()
    }
  render(){
    return (
      <h3> Hi from Theremin </h3>
    )
  }
}
export default AudioContext
