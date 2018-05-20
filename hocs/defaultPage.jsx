import Head from 'next/head'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'

// This higher order component (HoC) simply takes in a Page component and returns the enhanced component
export default Page =>
  class DefaultPage extends React.Component {
    static getInitialProps (ctx) {
      const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
      return {
        ...pageProps,
        loggedUser,
        currentUrl: ctx.pathname,
        isAuthenticated: !!loggedUser
      }
    }
  
    logout = (eve) => {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`)
      }
    }
  
    componentDidMount () {
      window.addEventListener('storage', this.logout, false)
    }
  
    componentWillUnmount () {
      window.removeEventListener('storage', this.logout, false)
    }
      
    render() {
      const pageTitle = 'NextJS and Auth0'
      return (
        <div>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>{pageTitle}</title>
          </Head>
          <Page {...this.props} />
        </div>
      )
    }
  }
