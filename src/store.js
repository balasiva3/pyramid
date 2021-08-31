import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
