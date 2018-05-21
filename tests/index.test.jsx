import { shallow } from "enzyme"
import { Index } from "../pages/index"

describe("The Index page", () => {
  describe(`when supplied without props`, () => {
    it(`should render`, () => {
      const wrapper = shallow(<Index />)
      expect(wrapper).toBeDefined()
    })
  })
  describe(`when supplied with a valid`, () => {
    describe(`isAuthenticated prop`, () => {
      it("should render", () => {
        const mockProps = {
          isAuthenticated: true,
        }
        const wrapper = shallow(<Index {...mockProps} />)
        expect(wrapper).toBeDefined()
      })
    })
  })
})
