import { combineReducers, legacy_createStore as createStore } from "redux";

// REDUCERS
import { reducerCounter } from "./reducers/counter";

// store.counter
const store = combineReducers({
  counter: reducerCounter,
});

export default createStore(store);
