import { shallow } from "enzyme"
import App from "./App"

describe("The App layout component", () => {
  it("should render", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })
})
