import React, { Component } from 'react'
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://www.nomada-travel.com.ec/wp-content/uploads/2015/06/nomada-travel-logo-web1123456.png">
            <img src="http://www.nomada-travel.com.ec/wp-content/uploads/2015/06/nomada-travel-logo-web1123456.png" alt="logo" width="112" height="50"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>                 

            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
      <div className="navbar-item">
      <Link to="/">
      <button type="submit" className="btn btn-outline-dark">Home</button>
      </Link>
      </div>
    </div>
      
         
        </div>
      </nav>
    )
  }
}

export default NavBar;