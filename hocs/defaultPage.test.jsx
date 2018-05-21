import { shallow } from "enzyme"
import Component from "./defaultPage"

describe("The defaultPage HOC", () => {
  it(`should render`, () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
})
