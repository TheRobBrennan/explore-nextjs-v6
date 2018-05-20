import { shallow } from "enzyme"
import Component from "../pages/index"

describe("The default page", () => {
  it("should render", () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
})
