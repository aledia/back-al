import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AllCircuits from "./components/AllCircuits/AllCircuits";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import AuthService from "./components/Auth/AuthService";
import Circuit from "./components/Info-circuit/Circuit";
import HomePage from "./components/HomePage/HomePage";
import Creator from "./components/creator/Creator";
import New from "./components/New/New";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getUser = userObj => {
    this.setState({
      ...this.state,
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      return this.service
        .loggedin()
        .then(response => {
          this.setState({ ...this.state, loggedInUser: response });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <NavBar logoutFunction={this.logout} />
          
          <Switch>
            <Route exact path="/allCircuits" component={AllCircuits} />
            <Route exact path="/circuit/:id" component={Circuit} />
            <Route exact path="/creator/:id" component={Creator} />
            <Route
              exact
              path="/new"
              render={props => (
                <New {...props} user={this.state.loggedInUser} />
              )}
            />
            )}/>
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route
              exact
              path="/signup"
              render={match => (
                <Signup {...match} getUser={() => this.getUser()} />
              )}
            />
            <Route
              exact
              path="/login"
              render={match => <Login {...match} getUser={this.getUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}
