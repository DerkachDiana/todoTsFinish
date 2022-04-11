import {
  AddTaskAT, AddTaskErrorAT, AddTaskSuccessAT, DeleteTaskAT, DeleteTaskErrorAT,
  DeleteTaskSuccessAT, ERROR_TYPE_ENUM, REQUEST_TYPE_ENUM, SUCCESS_TYPE_ENUM,
  UpdateTaskAT, UpdateTaskErrorAT, UpdateTaskSuccessAT
} from './types/actionsTypes';
import { Task } from '../../types/Task';

export const getTasksRequest = () => {
  return {
    type: REQUEST_TYPE_ENUM.GET_TASKS_REQUEST
  };
};

export const getTasksError = () => {
  return {
    type: ERROR_TYPE_ENUM.GET_TASKS_ERROR,
  };
};

export const getTasksSuccess = (tasks: Task[] | undefined) => {
  return {
    type: SUCCESS_TYPE_ENUM.GET_TASKS_SUCCESS,
    tasks
  };
};

export const addTaskRequest = (): AddTaskAT => {
  return {
    type: REQUEST_TYPE_ENUM.ADD_TASK_REQUEST
  };
};

export const addTaskError = (): AddTaskErrorAT => {
  return {
    type: ERROR_TYPE_ENUM.ADD_TASK_ERROR,
  };
};

export const addTaskSuccess = (newTask: Task): AddTaskSuccessAT => {
  return {
    type: SUCCESS_TYPE_ENUM.ADD_TASK_SUCCESS,
    task: newTask
  };
};

export const deleteTaskRequest = (): DeleteTaskAT => {
  return {
    type: REQUEST_TYPE_ENUM.DELETE_TASK_REQUEST
  };
};

export const deleteTaskError = (): DeleteTaskErrorAT => {
  return {
    type: ERROR_TYPE_ENUM.DELETE_TASK_ERROR,
  };
};

export const deleteTaskSuccess = (taskId: string): DeleteTaskSuccessAT => {
  return {
    type: SUCCESS_TYPE_ENUM.DELETE_TASK_SUCCESS,
    taskId: taskId
  };
};

export const updateTaskRequest = (): UpdateTaskAT => {
  return {
    type: REQUEST_TYPE_ENUM.UPDATE_TASK_REQUEST
  };
};

export const updateTaskError = (): UpdateTaskErrorAT => {
  return {
    type: ERROR_TYPE_ENUM.UPDATE_TASK_ERROR,
  };
};

export const updateTaskSuccess = (task: Task): UpdateTaskSuccessAT => {
  return {
    type: SUCCESS_TYPE_ENUM.UPDATE_TASK_SUCCESS,
    task: task
  };
};
