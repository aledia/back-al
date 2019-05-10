import React from "react";
import "./App.css";
import { Switch, Route,Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import AllCircuits from "./components/AllCircuits/AllCircuits";
import InfoUser from "./components/InfoUser/InfoUser";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import AuthService from "./components/Auth/AuthService";
import Contents from "./components/contents/Contents";


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getUser = userObj => {
    this.setState({
      ...this.state,
      loggedInUser:userObj
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
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }
  render() {
    // this.fetchUser();

    if (this.state.loggedInUser) {
      return (
        
        <React.Fragment>
         <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/infoUser" component={InfoUser} />
            <Route exact path="/allCircuits" component={AllCircuits} />
            <Route exact path="/NavBar" component={NavBar} />
         </Switch>
        
       
        </React.Fragment>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/infoUser" component={InfoUser} />
            <Route exact path="/allCircuits" component={AllCircuits} />
            <Route exact path="/NavBar" component={NavBar} />
            <Route
              exact
              path="/signup"
              render={(match) => <Signup {...match} getUser={this.getUser} />}
            />
            <Route
              exact
              path="/login"
              render={(match) => <Login  {...match}  getUser={this.getUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}
