import { shallow } from "enzyme"
import ConnectedPage from '../../pages/auth/sign-off'

describe("The auth/sign-off page", () => {
  describe(`when supplied without props`, () => {
    it(`should render`, () => {
      const wrapper = shallow(<ConnectedPage />)
      expect(wrapper).toBeDefined()
    })
  })
})
