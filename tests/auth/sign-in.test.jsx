import { shallow } from "enzyme"
import ConnectedPage from '../../pages/auth/sign-in'

describe("The auth/sign-in page", () => {
  describe(`when supplied without props`, () => {
    it(`should render`, () => {
      const wrapper = shallow(<ConnectedPage />)
      expect(wrapper).toBeDefined()
    })
  })
})
