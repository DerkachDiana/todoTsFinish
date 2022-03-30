import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from "redux-saga"
import { getTasksWatcher } from './saga/todoSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type IAppState = ReturnType<typeof store.getState>
//sagaMiddleware.run(getTasksWatcher)