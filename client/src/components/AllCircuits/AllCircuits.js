import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Circuit from "../Info-circuit/Circuit";
import TravelService from "../Travel/TravelService";
import NavBar from "../NavBar/NavBar";

export default class AllCircuits extends Component {
  constructor(props) {
    super(props);
    //instacia travelerservices
    this.travelService = new TravelService();

    this.state = {
      allCircuits: []
    };

    this.getAllCircuits();
  }
  //obten todos los viajes
  getAllCircuits() {
    this.travelService.all().then(allCircuits => {
      this.setState({
        ...this.state,
        allCircuits: allCircuits
      });
    });
  }
  //   render() {
  //     //haz un console.log mostrando los viajes
  //     //console.log(this.state.allCircuits)
  //     return (
  //       <div>

  //         {this.state.allCircuits.map(Circuit, idx => {
  //           return (
  //             <div key={idx} className="boxCircuit">

  //                 <Link to={`/circuit/${Circuit._id}`}>
  //                   <p>{Circuit.title}</p>
  //                   <p>{Circuit.description}</p>
  //                   <img alt="" src={Circuit.image_url}/>
  //                 </Link>
  //               </div>

  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // }

  render() {
    // if(this.state.data){
    //console.log(this.state.allCircuits)
    return (
      this.state.allCircuits && (
        <div>
          {this.state.allCircuits.map((circuit, idx) => {
            return (
              
              <div key={idx} className="boxMovie">
                <div>
                  <img alt="" src={circuit.image_url} />
                </div>
                <div>
                  
                  <Link className="" to={`/${circuit._id}`}>
                    {circuit.title}<p>{circuit.description}</p>
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
