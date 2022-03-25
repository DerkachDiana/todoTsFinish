import { GetTasksAction, DeleteTaskAction, AddTaskAction } from './types/actionsTypes';
import { Task } from '../../types/Task';

export const getTasksAction = (tasks: Task[]): GetTasksAction => {
  return {
    type: 'GET_TASKS',
    tasks
  }
}
 export const deleteTaskAction = (taskId: string): DeleteTaskAction => {
  return {
    type: "DELETE_TASK",
    taskId
  }
 }

 export const addTaskAction = (task: Task): AddTaskAction => {
  return {
    type: "ADD_TASK",
    task
  }
 }