import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./nav.css"; 
import logo from "./../Image/logo.png"
class NavBar extends Component {
  render() {
    return (
        <nav className="navbar" >
        <div className="navbar-brand">
        <Link to="/allCircuits" >
           <img src={logo} alt="" />
            </Link>
          <div id="nav"className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>                 

            <span></span>
          </div>
        </div>
      
        <div  className="navbar-menu">
        <div className="navbar-end">
      <div className="navbar-item">
      <Link to="/">
      <img src="" alt=""/>
      <button onClick={this.props.logoutFunction} className="btn btn-outline-light">Logout</button>
      </Link>
      </div>
    </div>
      
         
        </div>
      </nav>
    )
  }
}

export default NavBar;