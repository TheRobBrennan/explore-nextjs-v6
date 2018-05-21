import { shallow } from "enzyme"
import Component, { securePageHoc } from "./securePage"
import Page from '../pages/index'

describe("The securePage HOC", () => {
  it(`should render`, () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).toBeDefined()
  })
  it(`should have a static getInitialProps function`, () => {
    const WrappedComponent = securePageHoc(Page)
    const result = WrappedComponent.getInitialProps()
    expect(result).toBeUndefined()
  })
})
