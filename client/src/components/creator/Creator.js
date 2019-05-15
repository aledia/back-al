import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./creator.css";
import AuthService from "../Auth/AuthService";
import AllCircuits from "../AllCircuits/AllCircuits";

export default class Creator extends Component {
  constructor(props) {
    super(props);
    this.AuthService = new AuthService();
    this.state = {
      userData: null
    };
    this.getOneCreator();
  }
  getOneCreator() {
  const userId = this.props.match.params.id;
  this.AuthService.oneData(userId)
  .then(userData => {
     this.setState({
      ...this.state,
      userData
    })
  })  
  };
  

  render() {
    console.log(this.state.userData)
    if (this.state.userData === null) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="creatorContainer">
          
          <img src={this.state.userData.img} alt=""/>
            <h1>{this.state.userData.username}</h1>
          </div>
          <div className="circuitsUserContainer">
           <AllCircuits
            
           
           ></AllCircuits>
          </div>
        </React.Fragment>
      );
    }
  }
}
