import React, { Component } from 'react'
import Form from '../form/Form';

export default class Login extends Component {
  create(){
    
  }
  render() {
    return (
      <React.Fragment>
       <Form onSubmit={() => this.create()}></Form>
      </React.Fragment>
    )
  }
}
