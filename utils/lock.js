import { setSecret } from './auth'

import uuid from 'uuid'

/* istanbul ignore next */
const getLock = (options) => {
  const config = require('../config.json')
  const Auth0Lock = require('auth0-lock').default
  const auth0ClientID = process.env.AUTH0_CLIENT_ID || config.AUTH0_CLIENT_ID
  const auth0ClientDomain = process.env.AUTH0_CLIENT_DOMAIN || config.AUTH0_CLIENT_DOMAIN

  return new Auth0Lock(auth0ClientID, auth0ClientDomain, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

/* istanbul ignore next */
const getOptions = (container) => {
  const secret = uuid.v4()
  setSecret(secret)
  return {
    container,
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: `${getBaseUrl()}/auth/signed-in`,
      params: {
        scope: 'openid profile email',
        state: secret
      }
    }
  }
}

export const show = /* istanbul ignore next */ (container) => getLock(getOptions(container)).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })
