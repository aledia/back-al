import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      
        <React.Fragment>
            <nav class="navbar  fluid-container navbar-light bg-secondary d-flex justify-content-end">
               <Link to="/login"><button type="button" class="btn btn-light mr-md-3" >Login</button></Link>
                <Link to="/signup"> <button type="button" class="btn btn-light mr-md-3">Signup</button></Link>
            </nav>
            <div>
            <img class="d-flex justify-content-center" src="http://www.nomada-travel.com.ec/wp-content/uploads/2015/06/nomada-travel-logo-web1123456.png" alt="logo" />
            </div>

        </React.Fragment>
      
    )
  }
}
