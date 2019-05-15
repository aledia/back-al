import React, { Component } from "react";
import "./search.css";
export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBox">
        <input
          className="search"
          type="text"
          name="title"
          placeholder="Find a Circuit"
          autoComplete="off"
          onChange={e => this.props.search(e.target.value)}
        />
      </div>
    );
  }
}
