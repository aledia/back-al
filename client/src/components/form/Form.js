import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <form class="bg-secondary" >
                <div class="form-group ">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                             
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                             
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-outline-dark">Submit</button>
                </form>
            </div>
        )
    }
}
