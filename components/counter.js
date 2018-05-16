import React, { Component } from "react"
import { connect } from "react-redux"
import { incrementCount, decrementCount, resetCount } from "../store/store"

export class Counter extends Component {
  render() {
    const { count } = this.props
    return (
      <div className="main">
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <div>
          <button id="increment" onClick={this.props.increment}>
            <span>+</span>
          </button>
          <button id="reset" onClick={this.props.reset}>
            <span>Reset</span>
          </button>
          <button id="decrement" onClick={this.props.decrement}>
            <span>-</span>
          </button>
        </div>
        <style>{`
        .main {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        button > span, p {
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding: 5px;
        }        
      `}</style>
      </div>
    )
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(incrementCount())
    },
    decrement: () => {
      dispatch(decrementCount())
    },
    reset: () => {
      dispatch(resetCount())
    },
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  const { count } = state
  return { count }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
