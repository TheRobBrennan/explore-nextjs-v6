import { shallow } from "enzyme"
import { Provider } from 'react-redux'
import ConnectedComponent, { Counter } from './counter'
import { wrap } from "module";

describe("The connected Redux component", () => {
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
        <ConnectedComponent {...mockProps} />
      </Provider>
    )
    expect(wrapper).toBeDefined()
  })
})
describe(`Counter`, () => {
  it(`should be defined`, () => {
    expect(Counter).toBeDefined()
  })
  describe(`and when the increment button is pressed`, () => {
    let wrapper
    const mockIncrement = jest.fn()
    beforeEach(() => {
      wrapper = shallow(<Counter increment={mockIncrement} />)
      // Click the button
      wrapper.find('button#increment').simulate('click')
    })
    it(`the increment function should be invoked`, () => {
      expect(mockIncrement.mock.calls.length).toBe(1)
    })
  })
})
