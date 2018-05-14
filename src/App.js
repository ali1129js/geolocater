/**
 * @Author: Ali
 * @Date:   2018-05-13T17:37:04+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-14T09:32:42+02:00
 */

import React, { Component } from 'react'
import AudioContext from './AudioContext'
import logo from './logo.svg'
import './App.css'

const endpoint ='http://ip-api.com/json'
const endpoint2 = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '32941f4c12936fc51133cb69ca8f8b8a'
const fetchOption = {
  method:'GET'
}
class App extends Component {
  constructor(){
    super()
    this.state = {'yourLoc': {}};
  }
  componentDidMount() {
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      this.setState({yourLoc: d
      })
    })
    .catch(err => {
      console.error(err)
    })
}
getWeather = async (e) => {
  e.preventDefault()
  const api_call = await fetch(`${endpoint2}${this.state.yourLoc.city},${this.state.yourLoc.countryCode}&appid=${API_KEY}&units=metric`)
  const data = await api_call.json()
   if(data.main) {
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
  }
  else if(data.cod){
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: 'City not Found'
    })
  }
}
  render() {
    if(!this.state.city) {
      return (
        <div className="App">
          <header className="App-header" onClick={this.getWeather.bind(this)}>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">Welcome from {this.state.yourLoc.city}, {this.state.yourLoc.country}</h2>
          </header>
        </div>
      )
    }
    const { temperature, description,city } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {city} today: {temperature}°C <i>{description}</i>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AudioContext />
      </div>
    )
  }
}

export default App
