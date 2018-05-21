import React from 'react'
import PropTypes from 'prop-types'

import Router from 'next/router'

import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth'

export default class SignedIn extends React.Component {
  static propTypes = {
    url: PropTypes.object.isRequired
  }

  componentDidMount /* istanbul ignore next */ () {
    if (!process.browser) { return }  // No need to parse token and secret if we're not in the browser  
    const { token, secret } = extractInfoFromHash()
    if (!checkSecret(secret) || !token) {
      console.error('Unexpected behavior with the Sign In request')
    }
    setToken(token)
    Router.push('/')
  }

  render () {
    return null
  }
}