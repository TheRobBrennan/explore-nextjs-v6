import { initStore } from "./index"
import { INITIAL_STATE as EnthusiasmInitialState } from "../enthusiasm/types/initialState"

describe("The Redux store", () => {
  describe("should initialize without an error", () => {
    it("when supplied without an initial state", () => {
      const result = initStore()
      expect(result).toBeDefined()
    })
    it("when supplied with an initial state", () => {
      const mockState = {}
      const result = initStore(mockState)
      expect(result).toBeDefined()
    })
  })
})
