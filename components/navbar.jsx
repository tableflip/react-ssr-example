import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <ul>
        <li><Link to="/page-a" style={{color: 'grey'}} activeStyle={{color: 'black'}}>Page A</Link></li>
        <li><Link to="/page-b" style={{color: 'grey'}} activeStyle={{color: 'black'}}>Page B</Link></li>
      </ul>
    )
  }
})
