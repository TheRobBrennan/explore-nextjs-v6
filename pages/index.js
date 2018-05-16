import React from 'react'
import {connect} from 'react-redux'
import {startClock, incrementCount, serverRenderClock} from '../store/store'
import Examples from '../components/examples'
import App from '../layout/App'

class Counter extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req  // Did you know? !! converts a value to a boolean and ensures a boolean type
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <App>
        <Examples />
      </App>      
    )
  }
}

export default connect()(Counter)
