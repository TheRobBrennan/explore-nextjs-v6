import Link from 'next/link'
import PropTypes from 'prop-types'

import { dependencies } from '../package.json'
const { next: nextJSVersion, react: reactVersion } = dependencies

import App from '../layout/App'
import defaultPage from '../hocs/defaultPage'

const Index = ({ isAuthenticated }) => (
  <App>
    <div className="heading">
      [DEMO] NextJS {nextJSVersion} and React {reactVersion}
    </div>
    { isAuthenticated && <div>Super secret content!</div>}
    { !isAuthenticated && 
      <div>
        You're not authenticated yet. Click <Link href='/auth/sign-in'><a>here</a></Link> to <Link href='/auth/sign-in'><a>sign in</a></Link>
      </div>
    }
    <style>{`
      /* Sample inline styles */
      .heading {
        font-size: 50px
      }
    `}
    </style>
  </App>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

Index.defaultProps = {
  isAuthenticated: false
}

export default defaultPage(Index)
