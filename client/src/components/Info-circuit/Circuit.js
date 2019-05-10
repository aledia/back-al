import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./circuit.css";
export default class Circuit extends Component {
  render() {
    return (
      <div className="circuit">
        {/* <Link to={`/one/${this.props._id}`}>
          <img src={this.props.image_url} alt={this.props.title} />
          <h3>
            {this.props.title}
          </h3>
          <p>
            {this.props.description}
          </p>
        </Link> */}<h1>Trip</h1>
      </div>
    );
  }
}
