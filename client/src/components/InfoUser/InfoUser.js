import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import "./infoUser.css";
import TravelService from "../Travel/TravelService";
export default class InfoUser extends Component {
  
      constructor(props) {
        super(props);
        this.travelService = new TravelService();
        this.state = {
          creator: null
        };
      }
      getOneAuthor() {
        let id = this.props.match.params.author_id;
    
        // console.log(this.props.match.params.id);
        this.travelService.oneData(id).then(data => {
          this.setState({ ...this.state, creator: data }, () => {});
        });
      }


  render() {
    return (
      <React.Fragment>
        <h1> 
          {this.state.creator}
        </h1>
      </React.Fragment>
    )
  }
}

// export default class Circuit extends Component {{this.state.oneCircuit.author}
//   constructor(props) {
//     super(props);
//     this.travelService = new TravelService();
//     this.state = {
//       oneCircuit: null
//     };

//     this.getOneCircuit();
//   }
//   getOneCircuit() {
//     let id = this.props.match.params.id;

//     // console.log(this.props.match.params.id);
//     this.travelService.oneData(id).then(data => {
//       this.setState({ ...this.state, oneCircuit: data }, () => {});
//     });
//   }

//   render() {
//     if (this.state.oneCircuit === null) {
//       return (
//         <div>
//           <h1>LOADING...</h1>
//         </div>
//       );
//     } else {
//       return (
//         <React.Fragment>
//           <h1 className="text-center mr-md-6">{this.state.oneCircuit.title}</h1>
//           <div className="circuit d-flex  flex-wrap">
//             <div className="containerCircuit d-flex flex-column">
//               <div className="imgCircuit">
//                 <img alt="" src={this.state.oneCircuit.image_url} />
//               </div>
//               <div className="mapCircuit ">
//                 <h3>Mapa</h3>
//               </div>
//             </div>

//             <div className="descriptionCircuit">
//               <p>{this.state.oneCircuit.descriptions}</p>
//               {/* <p>{this.state.oneCircuit.coords}</p> */}

//               {/* <Link to={`/edit/${circuit._id}`}><button>Edit</button></Link> */}
//               {/* <button className="btn btn-outline-secondary" onClick={() => this.clearCircuit()}>Delete </button> */}
//             </div>
//             <div className="authorInfo">
              
//               <img alt="" src={this.state.oneCircuit.author_img} />
//               <h4> Creado por: <Link to={`/creator/${InfoUser._id}`} >       {this.state.oneCircuit.author}   </Link>  </h4>
//             </div>
//           </div>
//         </React.Fragment>
//       );
//     }
//   }
// }
