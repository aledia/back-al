import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    this.travelService.oneData(id).then(data => {
      this.setState({ ...this.state, oneCircuit: data }, () => {});
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
          <div className="searchBar" />
          <h1 className="text-center mr-md-6">{this.state.oneCircuit.title}</h1>
          <div className="circuit d-flex  flex-wrap">
            <div className="containerCircuit d-flex flex-column">
              <div className="imgCircuit">
                <img alt="" src={this.state.oneCircuit.image_url} />
              </div>
              <div className="mapCircuit ">
                <h3>Mapa</h3>
              </div>
            </div>

            <div className="descriptionCircuit">
              <p>{this.state.oneCircuit.descriptions}</p>
            </div>
            <div className="authorInfo">
              <img alt="" src={this.state.oneCircuit.creator_id.img} />
              <h4>
                Este circuito fue creado por:
                <Link to={`/creator/${this.state.oneCircuit.creator_id._id}`}>
                  <span className="creatorId">
                    {" "}
                    {this.state.oneCircuit.creator_id.username}
                  </span>
                </Link>
              </h4>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

// api key google maps AIzaSyCX_aQdF5ZCgOMtJYwiw8-94rxPxvJQBic
