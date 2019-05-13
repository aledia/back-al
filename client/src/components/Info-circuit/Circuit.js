import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import "./circuit.css";
import TravelService from "../Travel/TravelService";

export default class Circuit extends Component {
  constructor(props) {
    super(props);
    this.travelService = new TravelService();
    this.state = {
      oneCircuit: null
    };

    this.getOneCircuit();
  }
  getOneCircuit() {
    let id = this.props.match.params.id;

    // console.log(this.props.match.params.id);
    this.travelService.oneData(id).then(data => {
     
      this.setState({ ...this.state, oneCircuit: data }, () => {
        
      });
    });
  }

  render() {
    if (this.state.oneCircuit === null) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h1 className="text-center mr-md-6">{this.state.oneCircuit.title}</h1>
        <div className="circuit d-flex  flex-nowrap">
          
          <div className="imgCircuit">
            <img  alt="" src={this.state.oneCircuit.image_url} />
          </div>
          <div className="descriptionCircuit">
            <p>{this.state.oneCircuit.descriptions}</p>
            {/* <p>{this.state.oneCircuit.coords}</p> */}

            {/* <Link to={`/edit/${circuit._id}`}><button>Edit</button></Link> */}
            <button onClick={() => this.clearCircuit()}>Delete </button>
          </div>
          <div className="mapCircuit">
            
            <h3>Mapa</h3>
          </div>
        </div></React.Fragment>
      );
    }
  }
}
