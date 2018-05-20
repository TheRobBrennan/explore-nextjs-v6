import PropTypes from 'prop-types'

import Router from 'next/router'

import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth'

export default class SignedIn extends React.Component {
  static propTypes = {
    url: PropTypes.object.isRequired
  }

  componentDidMount () {
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