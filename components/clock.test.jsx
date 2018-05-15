import { mount } from "enzyme"
import Clock from "./clock"

describe("The Clock component", () => {
  it("should render", () => {
    const wrapper = mount(<Clock />)
    expect(wrapper).toBeDefined()
  })
  describe(`and when supplied with`, () => {
    describe(`a lastUpdate prop`, () => {
      describe(`that is a number`, () => {
        const mockLastUpdateProp = new Date()
        it("should render", () => {
          const wrapper = mount(<Clock lastUpdate={mockLastUpdateProp} />)
          expect(wrapper).toBeDefined()
        })              
      })
    })
  })
})
