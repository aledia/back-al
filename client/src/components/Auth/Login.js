
import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import { withRouter } from 'react-router'
import "./auth.css";
import NavBar from '../NavBar/NavBar';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    

    this.service.login(username, password )
      .then(response => {
        this.setState({
          username: username,
          password: password,
       
        }, 
        () => {
          this.props.getUser(response.user);
          this.props.history.push("/allCircuits");
      })
    })
      .catch(error => {
        //  this.setState({
          //  error:error.response.data.message
          // 
          //  
        //  });
      //  
      })
  
    }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  
  }
  render() {

    return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="big-container">
     <div className="small-container">
     <h4>Dont have account?..</h4>
     <Link to="/signup"><button id="btn-left" className="btn btn-outline-light"> Signup</button></Link>
     </div>
      <div className="form-container">
      {/* <h3>Please, login to our site</h3> */}
       
       <form onSubmit={this.handleFormSubmit}> 
       <div className="form-group">
        <fieldset>
          <label>Username:</label>
          <input type="text" className="form-control" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
        <div className="form-group">
        <fieldset>
          <label>Password:</label>
          <input type="password" className="form-control"  name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
        <input id="left"className="btn btn-outline-secondary"  type="submit" value="Login" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1> 
      </div>
     
      </div>
    </React.Fragment>
    )
  }

}
export default withRouter(Login);