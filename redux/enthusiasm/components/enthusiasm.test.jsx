import { shallow } from "enzyme"
import Enthusiasm from "./enthusiasm"
import { INITIAL_STATE as enthusiasm } from "../types/initialState"

describe("The Enthusiasm component", () => {
  it("should render", () => {
    const mockProps = {
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
      enthusiasm,
    }
    const wrapper = shallow(<Enthusiasm {...mockProps} />)
    expect(wrapper).toBeDefined()
  })
})
