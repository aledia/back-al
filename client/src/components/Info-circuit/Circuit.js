import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./circuit.css";
import TravelService from "../Travel/TravelService";

export default class Circuit extends Component {
  constructor(props) {
    super(props);
    this.travelService = new TravelService();
    this.state = {
      oneCircuits: ""
    };

    this.getOneCircuit();
  }
  getOneCircuit() {
    let id = this.props.match.params.id;
    
    console.log(this.props.match.params.id);
    this.travelService.oneData(id).then(oneCircuits => {
      console.log(oneCircuits);
      this.setState({
        ...this.state,
        oneCircuits: oneCircuits
      });
    });
  } 
  
  

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const circuit= this.state.circuit
    return (this.state.circuit && 
      <div className="circuit">
            <div>
            <img alt="" src={circuit.image_url}/>
            </div>
            <div>
            <p>{this.props.circuit.title}</p>
            <p>{circuit.description}</p>
            <p>{circuit.coords}</p>
           
            <Link to={`/edit/${circuit._id}`}><button>Edit</button></Link>
            <button onClick={() => this.clearCircuit()}>Delete </button>
            </div>   
      </div>
       )
      }
    }






