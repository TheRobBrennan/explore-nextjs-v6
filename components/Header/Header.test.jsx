import { shallow } from "enzyme"
import Component from "./Header"

describe("The Header component", () => {
  it(`should render`, () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
})
