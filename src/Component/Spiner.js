import React, { Component } from 'react'
import logo from './loading.gif'
export class Spiner extends Component {
  render() {
    return (
      <>
        <img src={logo} alt="Loading..." className="text-center" style={{paddingTop: '20%'}}/>
      </>
    )
  }
}

export default Spiner;
