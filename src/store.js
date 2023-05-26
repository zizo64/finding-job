import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {jobReducer,filterReducer} from "./reducer";
const reducers = combineReducers({
  job: jobReducer,
  filter: filterReducer,
});
const middleware = [thunk];

 
const initialState = {
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
