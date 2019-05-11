import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./circuit.css";
import Api from "../Travel/TravelService";

export default class Circuit extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      oneCircuits: ""
    };

    this.getOneCircuit();
  }
  getOneCircuit() {
    let id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    this.api.oneData(id).then(oneCircuits => {
      console.log(oneCircuits);
      this.setState({
        ...this.state,
        oneCircuits: oneCircuits
      });
    });
  }

  render() {
    return (
      <div className="circuit">
        <Link to={`/one/${this.props._id}`} />
        <img src={this.props.image_url} alt={this.props.title} />
        <h3>{this.state.oneCircuit}</h3>
        <p>{this.props.description}</p>

        <h1>Circuit</h1>
      </div>
    );
  }
}
