import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ApiReducer } from "./Reducer";

export const store = createStore(ApiReducer,applyMiddleware(thunk))