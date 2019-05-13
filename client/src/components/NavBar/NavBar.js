import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./nav.css"; 
class NavBar extends Component {
  render() {
    return (
        <nav className="navbar" >
        <div className="navbar-brand">
        <Link to="/">
            <img src="http://www.nomada-travel.com.ec/wp-content/uploads/2015/06/nomada-travel-logo-web1123456.png" alt="logo" width="112" height="50"/>
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