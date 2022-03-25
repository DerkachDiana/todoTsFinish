import { Task } from '../../../types/Task';

export const ADD_TASK = "ADD_TASK"
export const GET_TASKS = "GET_TASKS"
export const DELETE_TASK = "DELETE_TASK"


export type GetTasksAction = {
  type: "GET_TASKS",
  tasks: Task[]
}
export type DeleteTaskAction = {
  type: "DELETE_TASK",
  taskId: string
}
export type AddTaskAction = {
  type: "ADD_TASK",
  task: Task
}

export type TodoActions = GetTasksAction | DeleteTaskAction | AddTaskAction