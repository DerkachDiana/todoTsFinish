import TodoAPI from '../../service/API/TodoAPI';
// import {
//   getTasksAction,
//   addTaskAction,
//   deleteTaskAction,
//   updateTaskAction,
//   asyncAddTask,
//   asyncDeleteTask,
//   asyncUpdateTask,
// } from '../action/actions';
// import {
//   ASYNC_GET_TASKS,
//   ASYNC_ADD_TASK,
//   ASYNC_DELETE_TASK,
//   ASYNC_UPDATE_TASK,
//   REQUEST
// } from '../action/types/actionsTypes';
// import {put, takeEvery, call} from 'redux-saga/effects'
// import { fork } from 'child_process';
// import { getTasksError, getTasksRequest, getTasksSuccess } from '../action/stateActions';
//
//
//
// function* getTasksWorker(): Iterator<any>{
//   try {
//     // todo you should see for requests
//     yield put(getTasksRequest())
//     const tasks = yield call(TodoAPI.getAllTasks);
//
//     // todo action for success
//     yield put(getTasksSuccess(tasks));
//     yield put(getTasksAction());
//   } catch (error) {
//     yield put(getTasksError());
//     // todo action for error
//   console.log("getTasks error " + error);
// }
// }
//
// export function* addTaskWorker({ newTask }: ReturnType<typeof asyncAddTask> ): Iterator<any> {
//   try {
//     yield call(TodoAPI.createTask, newTask);
//     yield put(addTaskAction(newTask))
//   } catch (error) {
//     console.log("addTasksWorker " + error);
//   }
// }
//
// export function* deleteTaskWorker({idTaskToDelete}: ReturnType<typeof asyncDeleteTask>): Iterator<any> {
//   try {
//     yield call(TodoAPI.deleteTask, idTaskToDelete);
//     yield put(deleteTaskAction(idTaskToDelete))
//   } catch (error) {
//     console.log("addTasksWorker " + error);
//   }
// }
//
// export function* updateTaskWorker({task}: ReturnType<typeof asyncUpdateTask>): Iterator<any> {
//   try {
//     yield call(TodoAPI.updateTasks, task);
//     yield put(updateTaskAction(task))
//   } catch (error) {
//     console.log("addTasksWorker " + error);
//   }
// }
//
// export function* getTasksWatcher(): Iterator<any> {
//   yield takeEvery(REQUEST.GET_TASKS_REQUEST, getTasksWorker)
//   yield takeEvery(REQUEST.ADD_TASK_REQUEST, addTaskWorker)
//   yield takeEvery(REQUEST.DELETE_TASK_REQUEST, deleteTaskWorker)
//   yield takeEvery(REQUEST.UPDATE_TASK_REQUEST, updateTaskWorker)
// }
