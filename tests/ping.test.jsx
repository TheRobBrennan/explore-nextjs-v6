import { shallow } from "enzyme"
import Component from "../pages/ping"

describe("The Ping page", () => {
  it("should render", () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
  it("should render with props", () => {
    const props = { mockKey: "mockValue" }
    const wrapper = shallow(<Component {...props} />)
    expect(wrapper).toBeDefined()
  })
})
