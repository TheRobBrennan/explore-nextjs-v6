import React from 'react'
import PropTypes from 'prop-types'

import securePage from '../hocs/securePage'
import NotAuthorized from '../components/NotAuthorized/NotAuthorized'

const Secret = ({ loggedUser }) => {
  if (!loggedUser) return <NotAuthorized />
  return (
    <div>
      <p>Hi <strong>{loggedUser.email}</strong>. This is a super secure page!</p>
      <p>Try loading this page again using the incognito/private mode of your browser.</p>
    </div>
  )
}

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default securePage(Secret)
