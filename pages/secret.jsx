import PropTypes from 'prop-types'

import NotAuthorized from '../components/NotAuthorized'

const Secret = ({ loggedUser }) => {
  if (!loggedUser) return <NotAuthorized />
  return (
    <div>
      Hi <strong>{loggedUser.email}</strong>. This is a super secure page! Try loading this page again using the incognito/private mode of your browser.
    </div>
  )
}

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default Secret