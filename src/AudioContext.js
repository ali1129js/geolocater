/**
 * @Author: Ali
 * @Date:   2018-05-14T09:30:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-16T10:59:55+02:00
 */
import React, {Component} from 'react'
const styles = {}
styles.theremin = {
  height:200,
  width:200,
  border:'2px solid',
  cursor:'crosshair',
  margin:10,
  display:'inline-block'
}
class AudioContext extends Component {
  constructor(){
    super()
    this.state = {
      isPlaying:false,
      pitch:0,
      volume:0,
    }
  }
  handlePlayPress(){
  if (!this.state.isPlaying){
    this.state({
      isPlaying:true
    })
  } else {
  this.state({
    isPlaying:false
  })
  }
  }
  //web Audio initialization
  componentDidMount(){
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    this.doStuff()
    }
    play(){
      this.setState({isPlaying:true})
    }
    stop(){
      this.setState({isPlaying:false})
    }
    changeTone(event){
    const {clientX, clientY} = event
    const {top, right, bottom, left} = event.getboundingClientRect()
    //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    const pitch = (clientX - left) / right
    const volume = 1 - (clientY - top) / bottom
    this.setState({pitch, volume})
    }
    doStuff(){
      const {pitch, volume, isPlaying} = this.state
      if(isPlaying) {
        this.oscillator.play()
      } else {
        this.oscillator.stop()
      }
      this.oscillator.setPitchBend(pitch)
      this.oscillator.setVolume(volume)
    }
  render(){
    return (
    <div
      className="theremin"
      style={styles.theremin}
      onMouseEnter={this.play}
      onMouseLeave={this.stop}
      onMouseMove={this.changeTone}
    >
      <h3> Hi from Theremin </h3>
    </div>
    )
  }
}
export default AudioContext
