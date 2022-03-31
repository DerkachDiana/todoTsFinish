import { REQUEST, GetTasksSuccessAT, ERROR, SUCCESS
} from './types/actionsTypes';
import { Task } from '../../types/Task';
import { AsyncAddTaskAT, AsyncDeleteTaskAT, AsyncGetTasksAT, AsyncUpdateTaskAT } from './types/sagaActionTypes';
export const getTasksSuccessAction = (tasks: Task[]): GetTasksSuccessAT => {
  console.log("getTasksSuccessAction");
  return {
    type: 'GET_TASKS_SUCCESS',
    tasks
  }
}

export const asyncGetTasks = (): AsyncGetTasksAT => {
  return {
    type: "ASYNC_GET_TASKS"
  }
}

export const asyncAddTask = (newTask: Task): AsyncAddTaskAT => {
  return {
    type: "ASYNC_ADD_TASK",
    newTask
  }
}

export const asyncDeleteTask = (idTaskToDelete: string): AsyncDeleteTaskAT => {
  return {
    type: "ASYNC_DELETE_TASK",
    idTaskToDelete
  }
}
export const asyncUpdateTask = (): AsyncUpdateTaskAT => {
  return {
    type: "ASYNC_UPDATE_TASK"
  }
}
