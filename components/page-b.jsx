import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <h2>Page B</h2>
        {this.props.children}
      </div>
    )
  }
})
