import { combineReducers } from "redux"

// Reducers
import { enthusiasm } from "../enthusiasm/reducers/index"

export const rootReducer = combineReducers({
  enthusiasm,
})
