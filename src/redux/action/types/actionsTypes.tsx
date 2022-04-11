import { Task } from '../../../types/Task';

export enum REQUEST_TYPE_ENUM {
  GET_TASKS_REQUEST = 'GET_TASKS_REQUEST',
  ADD_TASK_REQUEST = 'ADD_TASK_REQUEST',
  DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST',
  UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST'
}

export enum SUCCESS_TYPE_ENUM {
  GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS',
  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS',
  DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS'
}

export enum ERROR_TYPE_ENUM {
  GET_TASKS_ERROR = 'GET_TASKS_ERROR',
  ADD_TASK_ERROR = 'ADD_TASK_ERROR',
  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
  UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR'
}

export type GetTasksAT = {
  type: REQUEST_TYPE_ENUM.GET_TASKS_REQUEST
}

export type DeleteTaskAT = {
  type: REQUEST_TYPE_ENUM.DELETE_TASK_REQUEST
}

export type AddTaskAT = {
  type: REQUEST_TYPE_ENUM.ADD_TASK_REQUEST
}

export type UpdateTaskAT = {
  type: REQUEST_TYPE_ENUM.UPDATE_TASK_REQUEST
}

export type UpdateTaskSuccessAT = {
  type: SUCCESS_TYPE_ENUM.UPDATE_TASK_SUCCESS,
  task: Task
}

export type UpdateTaskErrorAT = {
  type: ERROR_TYPE_ENUM.UPDATE_TASK_ERROR
}

export type GetTasksSuccessAT = {
  type: SUCCESS_TYPE_ENUM.GET_TASKS_SUCCESS,
  tasks: Task[]
}

export type AddTaskSuccessAT = {
  type: SUCCESS_TYPE_ENUM.ADD_TASK_SUCCESS,
  task: Task
}

export type DeleteTaskSuccessAT = {
  type: SUCCESS_TYPE_ENUM.DELETE_TASK_SUCCESS,
  taskId: string
}

export type GetTasksErrorAT = {
  type: ERROR_TYPE_ENUM.GET_TASKS_ERROR
}
export type AddTaskErrorAT = {
  type: ERROR_TYPE_ENUM.ADD_TASK_ERROR
}

export type DeleteTaskErrorAT = {
  type: ERROR_TYPE_ENUM.DELETE_TASK_ERROR
}

export type TodoActions = GetTasksAT | DeleteTaskAT | AddTaskAT |
  UpdateTaskAT | GetTasksSuccessAT | AddTaskSuccessAT | DeleteTaskSuccessAT | UpdateTaskSuccessAT |
  GetTasksErrorAT | AddTaskErrorAT | DeleteTaskErrorAT | UpdateTaskErrorAT
