import { incrementEnthusiasm, decrementEnthusiasm } from "./index"

describe("Enthusiasm", () => {
  describe("action", () => {
    describe("incrementEnthusiasm", () => {
      it("should be defined", () => {
        expect(incrementEnthusiasm).toBeDefined()
      })
      it("should execute without an error", () => {
        const result = incrementEnthusiasm()
        expect(result).toBeDefined()
      })
    })
    describe("decrementEnthusiasm", () => {
      it("should be defined", () => {
        expect(decrementEnthusiasm).toBeDefined()
      })
      it("should execute without an error", () => {
        const result = decrementEnthusiasm()
        expect(result).toBeDefined()
      })
    })
  })
})
