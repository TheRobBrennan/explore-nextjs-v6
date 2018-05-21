import { shallow } from "enzyme"
import { Secret } from "../pages/secret"

describe("The Secret page", () => {
  describe(`when supplied without props`, () => {
    it(`should render`, () => {
      const wrapper = shallow(<Secret />)
      expect(wrapper).toBeDefined()
    })
  })
  describe(`when supplied with a valid`, () => {
    describe(`isAuthenticated prop`, () => {
      it("should render", () => {
        const mockProps = {
          isAuthenticated: true,
        }
        const wrapper = shallow(<Secret {...mockProps} />)
        expect(wrapper).toBeDefined()
      })
    describe(`AND a valid loggedUser prop`, () => {
        it("should render", () => {
          const mockProps = {
            isAuthenticated: true,
            loggedUser: {
              email: "test@mail.com",
            },
          }
          const wrapper = shallow(<Secret {...mockProps} />)
          expect(wrapper).toBeDefined()
        })
      })
    })
  })
})
