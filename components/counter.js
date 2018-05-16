import React, { Component } from "react"
import { connect } from "react-redux"
import { incrementCount, decrementCount, resetCount } from "../store/store"

export class Counter extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button id="increment" onClick={this.props.increment}>
          +
        </button>
        <button id="reset" onClick={this.props.reset}>
          Reset
        </button>
        <button id="decrement" onClick={this.props.decrement}>
          -
        </button>
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
