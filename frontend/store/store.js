import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/root";
import thunk from "../thunk/thunk";


const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}
const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
export default configureStore


