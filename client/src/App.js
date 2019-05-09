import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Signup from './components/signup/signup';
import Form from './components/form/Form';

export default class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/form" component={Form}/>

        {/* <Route exact path="/:id" component={AllCircuits}/> */}
        
      </Switch>
    </div>
  );
  }
}