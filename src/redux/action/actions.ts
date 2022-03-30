import {
  GetTasksAT,
  DeleteTaskAT,
  AddTaskAT,
  AsyncGetTasksAT,
  AsyncAddTaskAT,
  AsyncDeleteTaskAT,
  AsyncUpdateTaskAT,
  UpdateTaskAT, REQUEST, GetTasksSuccessAT, ERROR, SUCCESS
} from './types/actionsTypes';
import { Task } from '../../types/Task';
export const getTasksSuccessAction = (tasks: Task[]): GetTasksSuccessAT => {
  console.log("getTasksSuccessAction");
  return {
    type: 'GET_TASKS_SUCCESS',
    tasks
  }
}
export const getTasksAction = (): GetTasksAT => {
  return {
    type: 'GET_TASKS_REQUEST'
  }
}
 export const deleteTaskAction = (taskId: string): DeleteTaskAT => {
  return {
    type: "DELETE_TASK_REQUEST",
    taskId
  }
 }

 export const addTaskAction = (task: Task): AddTaskAT => {
  return {
    type: "ADD_TASK_REQUEST",
    task
  }
 }

export const updateTaskAction = (task: Task): UpdateTaskAT => {
  return {
    type: "UPDATE_TASK_REQUEST",
    task
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
export const asyncUpdateTask = (task: Task): AsyncUpdateTaskAT => {
  return {
    type: "ASYNC_UPDATE_TASK",
    task
  }
}


export const addTaskRequest = (newTask: Task) => {
  return {
    type: REQUEST.ADD_TASK_REQUEST,
    task: newTask
  }
}
export const deleteTaskRequest = (idTaskToDelete: string) => {
  return {
    type: REQUEST.GET_TASKS_REQUEST,
    taskId: idTaskToDelete
  }
}
export const updateTasksRequest = (task: Task) => {
  return {
    type: REQUEST.GET_TASKS_REQUEST,
    task: task
  }
}
