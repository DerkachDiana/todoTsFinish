import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Task } from '../types/Task';

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
// export type IAppState = {
//   tasks: Task[],
//   isLoading: boolean,
//   taskReducer
// }
//sagaMiddleware.run(getTasksWatcher)