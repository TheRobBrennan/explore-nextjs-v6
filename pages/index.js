import React from "react"
import App from "../layout/App"
import { connect } from "react-redux"
import * as actions from "../redux/enthusiasm/actions/index"
import { bindActionCreators } from "redux"
import Enthusiasm from '../redux/enthusiasm/components/enthusiasm'

export class ReduxExample extends React.Component {
  /* istanbul ignore next */
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
    return (
      <App>
        <Enthusiasm {...this.props} />
      </App>
    )
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ enthusiasm }) => {
  return {
    enthusiasm,
  }
}

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: bindActionCreators(actions.incrementEnthusiasm, dispatch),
    onDecrement: bindActionCreators(actions.decrementEnthusiasm, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)
