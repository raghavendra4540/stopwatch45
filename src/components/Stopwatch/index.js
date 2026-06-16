// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  timerId = null

  onStart = () => {
    if (this.timerId === null) {
      this.timerId = setInterval(this.updateTimer, 1000)
    }
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.timerId = null
    this.setState({seconds: 0})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  formatTime = () => {
    const {seconds} = this.state

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="stopwatch"
              />
              <p className="timer-name">Timer</p>
            </div>
            <h1>{this.formatTime()}</h1>
            <div className="button-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onStop}
              >
                stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
