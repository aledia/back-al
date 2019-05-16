import React, { Component } from 'react'
 import logo from "./../Image/logo3.png"
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="footer" className="container-fluid ">
        © <i class="fa fa-copyright" aria-hidden="true"></i>
        <img  id="logoPeq" src={logo} alt=""/> 
        </div>
      </React.Fragment>
    )
  }
}
