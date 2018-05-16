import App, {Container} from 'next/app'
import {Provider} from 'react-redux'
import { initStore } from '../redux/store/index'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initStore(initialState)
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default (App) => {
  return class Redux extends React.Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()
    
      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
} 
