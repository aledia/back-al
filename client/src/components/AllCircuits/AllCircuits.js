import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';



export default class AllCircuits extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="image">
        <img src="" alt="picture"/>

        </div>
        <div className="infoCircuit">
        </div>
        <div className="map"></div>
      </React.Fragment>
    )
  }
}
