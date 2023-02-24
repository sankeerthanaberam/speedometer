// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed Is {count}mph</h1>
        <p>Min Limit is 0mph,Max Limit is 200mph</p>
        <button type="button" onClick={this.onIncrement}>
          Accelerate
        </button>
        <button type="button" onClick={this.onIncrement}>
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
