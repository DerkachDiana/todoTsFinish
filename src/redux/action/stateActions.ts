import { ERROR, REQUEST, SUCCESS } from './types/actionsTypes';
import { Task } from '../../types/Task';

export const getTasksRequest = () => {
  console.log("getTasksRequest - 1");
  return {
    type: REQUEST.GET_TASKS_REQUEST
  }
}
export const getTasksError = () => {
  return {
    type: ERROR.GET_TASKS_ERROR,
  }
}
export const getTasksSuccess = (tasks: Task[] | undefined) => {
  return {
    type: SUCCESS.GET_TASKS_SUCCESS,
    tasks
  }
}