import _ from "lodash"
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
} from "../actions/index"
import { INITIAL_STATE } from "../types/initialState"

export function enthusiasm(state = INITIAL_STATE, action) {
  const actionType = _.get(action, "type")

  switch (true) {
    case actionType === INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case actionType === DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(0, state.enthusiasmLevel - 1),
      }
    default:
      return state
  }
}
