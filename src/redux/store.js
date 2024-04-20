import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducer";

export const ReduxStore=legacy_createStore(productReducer,composeWithDevTools(applyMiddleware(thunk,logger)))   