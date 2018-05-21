import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'

import { dependencies } from '../package.json'
const { next: nextJSVersion, react: reactVersion } = dependencies

import defaultPage from '../hocs/defaultPage'

export const Index = ({ isAuthenticated }) => (
  <div>
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
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

Index.defaultProps = {
  isAuthenticated: false
}

export default defaultPage(Index)
