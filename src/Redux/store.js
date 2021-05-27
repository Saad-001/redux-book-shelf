import { createStore, combineReducers } from "redux";
import bookReducer from './reducers/bookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const combineReducer = combineReducers({
    books : bookReducer
})

export const store = createStore(combineReducer, composeWithDevTools());