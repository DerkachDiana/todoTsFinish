import { Task } from '../../../types/Task';

export type AsyncGetTasksAT = {
  type: "ASYNC_GET_TASKS"
}

export type AsyncAddTaskAT = {
  type: "ASYNC_ADD_TASK",
  newTask: Task
}

export type AsyncDeleteTaskAT = {
  type: "ASYNC_DELETE_TASK",
  idTaskToDelete: string
}
export type AsyncUpdateTaskAT = {
  type: "ASYNC_UPDATE_TASK"
}