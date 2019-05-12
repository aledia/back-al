import React, { Component } from "react";
import AuthService from "./AuthService";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./auth.css";
import NavBar from "../NavBar/NavBar";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;

    this.service
      .signup(username, password, email)
      .then(response => {
        this.setState(
          {
            ...this.state,
            username: "",
            password: "",
            email: ""
          },
          () => {
            this.props.getUser(response.user);
            this.props.history.push("/home");
          }
        );
      })
      .catch(error => {
        // this.setState({
        //   username: username,
        //   password: password,
        //   email:email,
        //   error: true
        // });
        // console.log(error)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="big-container">
          <div className="small-container">
            <h4>Have an account?..</h4>
            <Link to="/login">
              <button id="btn-left" className="btn btn-outline-light">
                Login
              </button>
            </Link>
          </div>
          <div className="form-container">
          <form className="form-group" onSubmit={e => this.handleFormSubmit(e)}>
            <div className="form-group">
              <fieldset>
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                />
              </fieldset>
            </div>
            <div className="form-group">
              <fieldset>
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
              </fieldset>
            </div>
            <div className="form-group">
              <fieldset>
                <label>Email:</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
              </fieldset>
            </div>
            <input
              className="btn btn-outline-secondary "
              type="submit"
              id="left"
              value="Sign up"
            />
          </form>

          <h1>{this.state.error ? "Error" : ""}</h1>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Signup);
