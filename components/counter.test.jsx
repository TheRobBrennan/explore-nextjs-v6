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
  describe(`and when the add button is pressed`, () => {
    let wrapper
    const mockAdd = jest.fn()
    beforeEach(() => {
      wrapper = shallow(<Counter add={mockAdd} />)
      // Click the add button
      wrapper.find('button#add').simulate('click')
    })
    it(`the add function should be invoked`, () => {
      expect(mockAdd.mock.calls.length).toBe(1)
    })
  })
})
