import {
  AddTaskAT, AddTaskErrorAT, AddTaskSuccessAT,
  DeleteTaskAT,
  DeleteTaskErrorAT,
  DeleteTaskSuccessAT,
  ERROR,
  REQUEST,
  SUCCESS, UpdateTaskAT, UpdateTaskErrorAT, UpdateTaskSuccessAT
} from './types/actionsTypes';
import { Task } from '../../types/Task';

export const getTasksRequest = () => {
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

export const addTaskRequest = (): AddTaskAT => {
  return {
    type: REQUEST.ADD_TASK_REQUEST
  }
}
export const addTaskError = (): AddTaskErrorAT => {
  return {
    type: ERROR.ADD_TASK_ERROR,
  }
}
export const addTaskSuccess = (newTask: Task): AddTaskSuccessAT => {
  return {
    type: SUCCESS.ADD_TASK_SUCCESS,
    task: newTask
  }
}
export const deleteTaskRequest = (): DeleteTaskAT => {
  return {
    type: REQUEST.DELETE_TASK_REQUEST
  }
}
export const deleteTaskError = (): DeleteTaskErrorAT => {
  return {
    type: ERROR.DELETE_TASK_ERROR,
  }
}
export const deleteTaskSuccess = (taskId: string): DeleteTaskSuccessAT => {
  return {
    type: SUCCESS.DELETE_TASK_SUCCESS,
    taskId: taskId
  }
}
export const updateTaskRequest = (): UpdateTaskAT => {
  return {
    type: REQUEST.UPDATE_TASK_REQUEST
  }
}
export const updateTaskError = (): UpdateTaskErrorAT => {
  return {
    type: ERROR.UPDATE_TASK_ERROR,
  }
}
export const updateTaskSuccess = (task: Task): UpdateTaskSuccessAT => {
  return {
    type: SUCCESS.UPDATE_TASK_SUCCESS,
    task: task
  }
}