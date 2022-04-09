import React, { Component } from 'react'
import logo from './loading.gif'
export class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={logo} alt="Loading..."/>
    </div>
    )
  }
}

export default Spiner
