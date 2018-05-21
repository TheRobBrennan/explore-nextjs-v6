import React from 'react'

import defaultPage from '../../hocs/defaultPage'
import { show } from '../../utils/lock'

const CONTAINER_ID = 'put-lock-here'

export class SignIn extends React.Component {
  /* istanbul ignore next */
  componentDidMount () {
    show(CONTAINER_ID)
  }

  /* istanbul ignore next */
  render () {    
    return <div id={CONTAINER_ID} />
  }
}

export default defaultPage(SignIn)
