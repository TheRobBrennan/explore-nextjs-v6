import PropTypes from 'prop-types'

import defaultPage from './defaultPage'
import NotAuthorized from '../components/NotAuthorized/NotAuthorized'

// This higher order component (HoC) simply takes in a Page component and returns the enhanced component or an unauthorized component
export const securePageHoc = Page => class SecurePage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  static getInitialProps (ctx) {
    /* istanbul ignore else */
    if (!process.browser) { return undefined }
    /* istanbul ignore next */
    return Page.getInitialProps && Page.getInitialProps(ctx)
  }

  /* istanbul ignore next */
  render () {
    const { isAuthenticated } = this.props
    return isAuthenticated ? <Page {...this.props} /> : <NotAuthorized />
  }
}

export default Page => defaultPage(securePageHoc(Page))
