import React, { Component } from 'react'
import { Link } from "react-router-dom";
  import logo from "./../Image/logo3.png"
// import { MapContainer } from '../MapContainer/MapContainer';
export default class HomePage extends Component {
  render() {
    return (
      
        <React.Fragment>
            <nav className="navbar  fluid-container navbar-light  d-flex justify-content-end">
               <Link to="/login"><button type="button" className="btn btn-outline-light mr-md-3" >Login</button></Link>
                <Link to="/signup"> <button type="button" className="btn btn-outline-light mr-md-3">Signup</button></Link>
            </nav>
            <div className="d-flex justify-content-center align-items-center">
            <img  id="logoGr" src={logo} alt=""/> 
            </div>
          
        </React.Fragment>
      
    )
  }
}
