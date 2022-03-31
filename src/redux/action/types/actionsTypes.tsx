import { Task } from '../../../types/Task';
import { AsyncAddTaskAT, AsyncDeleteTaskAT, AsyncGetTasksAT, AsyncUpdateTaskAT } from './sagaActionTypes';


// todo create enum for different requests

export enum REQUEST {
  GET_TASKS_REQUEST = 'GET_TASKS_REQUEST',
  ADD_TASK_REQUEST = 'ADD_TASK_REQUEST',
  DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST',
  UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST'
}

export enum SUCCESS {
  GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS',
  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS',
  DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS'
}

export enum ERROR {
  GET_TASKS_ERROR = 'GET_TASKS_ERROR',
  ADD_TASK_ERROR = 'ADD_TASK_ERROR',
  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
  UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR'
}


export const ASYNC_GET_TASKS = "ASYNC_GET_TASKS"
export const ASYNC_ADD_TASK = "ASYNC_ADD_TASK"
export const ASYNC_DELETE_TASK = "ASYNC_DELETE_TASK"
export const ASYNC_UPDATE_TASK = "ASYNC_UPDATE_TASK"


export type GetTasksAT = {
  type: "GET_TASKS_REQUEST"
}
export type DeleteTaskAT = {
  type: "DELETE_TASK_REQUEST"
}
export type AddTaskAT = {
  type: "ADD_TASK_REQUEST"
}
export type UpdateTaskAT = {
  type: "UPDATE_TASK_REQUEST"
}
export type UpdateTaskSuccessAT = {
  type: "UPDATE_TASK_SUCCESS",
  task: Task
}
export type UpdateTaskErrorAT = {
  type: "UPDATE_TASK_ERROR"
}
export type GetTasksSuccessAT = {
  type: "GET_TASKS_SUCCESS",
  tasks: Task[]
}
export type AddTaskSuccessAT = {
  type: "ADD_TASK_SUCCESS",
  task: Task
}
export type DeleteTaskSuccessAT = {
  type: "DELETE_TASK_SUCCESS",
  taskId: string
}

export type GetTasksErrorAT = {
  type: "GET_TASKS_ERROR"
}
export type AddTaskErrorAT = {
  type: "ADD_TASK_ERROR"
}
export type DeleteTaskErrorAT = {
  type: "DELETE_TASK_ERROR"
}

export type TodoActions = GetTasksAT | DeleteTaskAT | AddTaskAT |
  UpdateTaskAT | AsyncGetTasksAT | AsyncAddTaskAT | AsyncDeleteTaskAT |
  AsyncUpdateTaskAT | GetTasksSuccessAT | AddTaskSuccessAT | DeleteTaskSuccessAT | UpdateTaskSuccessAT |
  GetTasksErrorAT | AddTaskErrorAT | DeleteTaskErrorAT | UpdateTaskErrorAT