import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducer from './todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk'

const rootReducer = combineReducers({
  taskReducer: todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))