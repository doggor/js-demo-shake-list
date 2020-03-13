import { createStore, combineReducers } from "redux";
import listReducer from "./list/reducer";
import colorsReducer from "./colors/reducer";

const rootReducer = combineReducers({
    list: listReducer,
    colors: colorsReducer,
});

const enhancer = window.hasOwnProperty("__REDUX_DEVTOOLS_EXTENSION__") ? window["__REDUX_DEVTOOLS_EXTENSION__"]() : undefined;

const store = createStore(rootReducer, enhancer);

export default store;
