import { shallow } from "enzyme"
import Component from "./NotAuthorized"

describe("The NotAuthorized component", () => {
  it(`should render`, () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
})
