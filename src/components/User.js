import React, { Component } from 'react'

export default class User extends Component {
  
  render() {
    const name = 'Makis'
    return (<div>
      <p>User: <b>{ name }</b></p>
    </div>)
  }
}