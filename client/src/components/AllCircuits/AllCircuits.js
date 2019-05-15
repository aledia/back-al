import React, { Component } from "react";
import { Link } from "react-router-dom";
import TravelService from "../Travel/TravelService";
// import NavBar from "../NavBar/NavBar";
import "./allCircuits.css";
import SearchBar from "../SearchBar/SearchBar";

export default class AllCircuits extends Component {
  constructor(props) {
    super(props);
    this.travelService = new TravelService();
    this.state = {
      allCircuits: [],
      filteredCircuits: []
    };
  }

  getAllCircuits() {
    this.travelService.all().then(allCircuits => {
      this.setState({
        ...this.state,
        allCircuits: allCircuits,
        filteredCircuits: allCircuits
      });
    });
  }

  componentDidMount() {
    this.getAllCircuits();
  }

  filterCircuit(query) {
    let filteredCircuits = [...this.state.filteredCircuits];
    if (query.length === 0 || filteredCircuits.length === 0) {
      this.setState({
        ...this.state,
        filteredCircuits: this.state.allCircuits
      });
    } else {
      this.setState({
        ...this.state,
        filteredCircuits: filteredCircuits.filter(circuit =>
          circuit.title.toLowerCase().includes(query.toLowerCase())
        )
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <SearchBar search={circuit => this.filterCircuit(circuit)} />
        </div>
        <div className="boxMovie  ">
          {this.state.filteredCircuits.map((circuit, idx) => {
            return (
              <div key={idx} className="card" style={{ width: 280 }}>
                <div>
                  <img
                    alt=""
                    className="card-img-top"
                    src={circuit.image_url}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center"> {circuit.title}</h5>
                  {/* <p className="card-text">
                  {circuit.descriptions}
                  </p> */}

                  <Link
                    id="btn"
                    className="btn btn-outline-secondary"
                    to={`/circuit/${circuit._id}`}
                  >
                    {" "}
                    Circuit{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
