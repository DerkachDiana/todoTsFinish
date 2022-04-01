import { GetTasksSuccessAT, SUCCESS_TYPE_ENUM } from './types/actionsTypes';
import { Task } from '../../types/Task';
import { AsyncDeleteTaskAT, AsyncGetTasksAT } from './types/sagaActionTypes';

export const getTasksSuccessAction = (tasks: Task[]): GetTasksSuccessAT => {
  console.log("getTasksSuccessAction");
  return {
    type: SUCCESS_TYPE_ENUM.GET_TASKS_SUCCESS,
    tasks
  }
}

export const asyncGetTasks = (): AsyncGetTasksAT => {
  return {
    type: "ASYNC_GET_TASKS"
  }
}

export const asyncDeleteTask = (idTaskToDelete: string): AsyncDeleteTaskAT => {
  return {
    type: "ASYNC_DELETE_TASK",
    idTaskToDelete
  }
}
