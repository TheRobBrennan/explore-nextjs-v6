import React from "react"
import App from "../layout/App"
import { connect } from "react-redux"
import * as actions from "../redux/enthusiasm/actions/index"
import { bindActionCreators } from "redux"

class ReduxExample extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req // Did you know? !! converts a value to a boolean and ensures a boolean type
    if (isServer) {
      // Dispatch Redux actions to initialize our store for the desired content
      // For examples of async actions, check out
      //  https://github.com/kirill-konshin/next-redux-wrapper#async-actions-in-getinitialprops
    }
    return {}
  }

  render() {
    const { enthusiasm, onIncrement, onDecrement } = this.props
    return (
      <App>
        <div className="myDiv">
          <h1>Redux [DEMO]</h1>
          <div className="greeting">
            Hello. Are you excited?{this.getExclamationMarks(enthusiasm.enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
          <pre>{JSON.stringify(this.props)}</pre>
        </div>
        <style>{`
        img {
          width: 300px;
          height: 300px;
          }
        h1 {
          font-family: Arial;
        }
        .myDiv {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
      </App>
    )
  }

  getExclamationMarks(numChars) {
    return Array(numChars + 1).join("!")
  }
}

const mapStateToProps = ({ enthusiasm }) => {
  return {
    enthusiasm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: bindActionCreators(actions.incrementEnthusiasm, dispatch),
    onDecrement: bindActionCreators(actions.decrementEnthusiasm, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)
