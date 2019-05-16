import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import "./New.css";
import Services from "../Travel/TravelService";


export default class New extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      created: false,
      creator_id: ""
    };
    this.Services = new Services();
  }

  dataUpdate(val, key) {
    this.setState({
      ...this.state,
      data: {...this.state.data, [key]: val}
    });
  }

  create(e) {
    e.preventDefault()
    this.Services.newOne({
      ...this.state.data,
      creator_id: this.props.user._id
    })
      .then(data => {
        this.setState({
          ...this.state,
          created: true,
          creator_id: data.data._id
        })
      }
      );
  }

  render() {
    let data = this.state.data;
        if (this.state.created) { return <Redirect to = {{ pathname: `/allCircuits` }} />;}
        else {
          return (
            <div className="formCont">
            <h2> Create new Circuit</h2>
      <form className="extendedCardEdit" onSubmit={e => this.create(e)}>
       <label for="title"> Title:</label>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={e => this.dataUpdate(e.target.value, "title")}
        />
        <label for="descriptions"> Description:</label>
         <textarea  onChange={e => this.dataUpdate(e.target.value, "descriptions")}></textarea>
        
        <label for="imimage_url">Image Url</label>
        <input
          type="text"
          placeholder="image url"
          value={data.image_url}
          onChange={e => this.dataUpdate(e.target.value, "image_url")}
        />
        
        <button className="btn btn-secondary" type="submit">Create Circuit</button>
      </form>
      </div>
          )}}
    
}
