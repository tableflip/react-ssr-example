import React from 'react'
import Navbar from './navbar.jsx'

export default React.createClass({
  render () {
    return (
      <div>
        <Navbar />
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
})
