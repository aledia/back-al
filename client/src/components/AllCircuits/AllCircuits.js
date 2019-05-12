import React, { Component } from "react";
import { Link } from "react-router-dom";
import TravelService from "../Travel/TravelService";
//import NavBar from "../NavBar/NavBar";
import "./circuits.css";
export default class AllCircuits extends Component {
  constructor(props) {
    super(props);
    this.travelService = new TravelService();
    this.state = {
      allCircuits: []
    };
    this.getAllCircuits();
  }
  getAllCircuits() {
    this.travelService.all().then(allCircuits => {
      this.setState({
        ...this.state,
        allCircuits: allCircuits
      });
    });
  }
 

  render() {
    return (
      this.state.allCircuits && (
        <div className="card  mb-33 d-flex justify-content-center align-items-center flex-column" style={{ width: 320 }}>
          {this.state.allCircuits.map((circuit, idx) => {
            return (
              <div key={idx} className="boxMovie" >
                <div>
                  <img
                    alt=""
                    className="card-img-top"
                    src={circuit.image_url}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title"> {circuit.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link className="btn btn-dark" to={`/${circuit._id}`}>
                  <Link to={`/one/${this.props._id}`} > Link </Link>
                    Go somewhere
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  }
}
