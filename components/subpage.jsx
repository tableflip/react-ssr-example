import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <h3>SubPage</h3>
        <h4>{this.props.params.data}</h4>
      </div>
    )
  }
})
