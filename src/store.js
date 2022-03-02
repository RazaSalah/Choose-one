import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import thunk from "redux-thunk";

// to be seen in the dev tools pass compose dev tool as second parameter
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
