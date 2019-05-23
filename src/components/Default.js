import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center'>
            <h1 className='display-3'>404</h1>
            <h1>Page not found!</h1>

            <h2>the requested URL <span className='text-danger'> {this.props.location.pathname} </span>was not found</h2>

          </div>  

        </div>
      </div>
    )
  }
}
