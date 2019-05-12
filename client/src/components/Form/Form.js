import React, { Component } from 'react'
import "./Form.css";

export default class Form extends Component {
    render() {
        return (
            
            <div className="form-container" >
                <form >
                <div className="form-group  ">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="namelHelp"  />
                             
                    </div>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                             
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"  />
                    </div>
                    {/* <div class="form-group form-check"> */}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
                        {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                    {/* </div> */}
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </form>
            </div>
        )
    }
}
