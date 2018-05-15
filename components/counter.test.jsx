import { shallow } from "enzyme"
import { Provider } from 'react-redux'
import Counter from './counter'

describe("The Counter component", () => {
  it("should render", () => {
    const mockStore = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    }
    const mockProps = {
      count: 0
    }
    const wrapper = shallow(
      <Provider store={mockStore} >
        <Counter {...mockProps} />
      </Provider>
    )
    expect(wrapper).toBeDefined()
  })
})
