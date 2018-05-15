import React, { Component } from "react"
import { connect } from "react-redux"
import { addCount } from "../store/store"

export class Counter extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button id='add' onClick={this.props.add}>Add To Count</button>
      </div>
    )
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch(addCount())
    },
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  const { count } = state
  return { count }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
