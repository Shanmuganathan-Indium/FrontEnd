import React, { Component } from 'react'

export class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick =()=>{
        this.setState({
           count : this.state.count + 1
        })
    }
  render() {
        
    return (
      <div>
        <h1>Counter in Class Component</h1>
        <button onClick={this.handleClick}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter