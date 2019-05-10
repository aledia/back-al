import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Circuit from '../Info-circuit/Circuit';
export default class AllCircuits extends Component {
  render() {
    return (
      <div>
        
       <Link to="/circuit">Trip</Link>
      </div>
    )
  }
}
