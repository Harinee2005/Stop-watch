import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timing: 0, isRunning: false}

  formattedTiming = () => {
    const {timing} = this.state
    const minutes = Math.floor(timing / 60)
    const seconds = timing % 60
    const forMin = minutes > 9 ? minutes : `0${minutes}`
    const forSec = seconds > 9 ? seconds : `0${seconds}`
    return `${forMin}:${forSec}`
  }

  tick = () => {
    const {isRunning} = this.state
    if (isRunning) {
      this.setState(prevState => ({
        timing: prevState.timing + 1,
      }))
    }
  }

  onStart = () => {
    this.setState({isRunning: true})
    this.timeId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timeId)
    this.setState({isRunning: false})
  }

  onReset = () => {
    clearInterval(this.timeId)
    this.setState({timing: 0, isRunning: false})
  }

  componentWillUnmount = () => {
    clearInterval(this.timeId)
  }

  render() {
    const formattedTime = this.formattedTiming()
    return (
      <div className="background-img">
        <h1 className="title">Stopwatch</h1>
        <div className="timer-container">
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="icon"
            />
            <h1 className="icon-name">Timer</h1>
          </div>
          <h1 className="timings">{formattedTime}</h1>
          <div className="btn-container">
            <button
              onClick={this.onStart}
              className="button start-btn"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onStop}
              className="button stop-btn"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onReset}
              className="button reset-btn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
