import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../JS/Reducers/Reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore (rootReducer,composeEnhancers(applyMiddleware(thunk)))
export default store