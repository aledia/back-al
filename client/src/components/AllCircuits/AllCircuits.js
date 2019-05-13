import React, { Component } from "react";
import { Link } from "react-router-dom";
import TravelService from "../Travel/TravelService";
// import NavBar from "../NavBar/NavBar";
import "./circuits.css";
export default class AllCircuits extends Component {
  constructor(props) {
    super(props);
    this.travelService = new TravelService();
    this.state = {
      allCircuits: []
    };
    
    
  }
  getAllCircuits() {
   
    this.travelService.all().then(allCircuits => {
      this.setState({
        ...this.state,
        allCircuits: allCircuits
      });
    });
  }
 
  componentDidMount(){
  
    this.getAllCircuits();
  }

  render() {
    
    return (
      <React.Fragment>
        <div className="boxMovie d-flex container-fluid justify-content-center">
        
           {this.state.allCircuits.map((circuit, idx) => {
            return (
              <div key={idx} id="card" className="card d-flex justify-content-around align-items-center" style={{ width: 280 }}>
               
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
                  
                  <Link className="btn btn-outline-secondary" to={`/circuit/${circuit._id}`} > Circuit </Link>
                  
                  
                </div>
              </div>
            );
          })}
        </div>
        </React.Fragment>
      
    );
  }
}
