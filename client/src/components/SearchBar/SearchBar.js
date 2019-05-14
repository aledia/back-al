import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
       <input type="text" onChange={(e) => this.props.search(e.target.value)}/>
       <input type="checkbox" name="" onChange={(e) => this.props.onStock(e.target.value)}/>
      </div>
    )
  }
}
