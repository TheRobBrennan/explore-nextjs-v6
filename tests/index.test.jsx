import { shallow } from "enzyme"
import { ReduxExample } from "../pages/index"

describe("The default page", () => {
  it("should render", () => {
    const wrapper = shallow(<ReduxExample />)
    expect(wrapper).toBeDefined()
  })
})
