import TodoAPI from '../../service/API/TodoAPI';
import { Dispatch } from '@reduxjs/toolkit';
import { Task } from '../../types/Task';
import {
  addTaskError, addTaskRequest, addTaskSuccess, deleteTaskError, deleteTaskRequest,
  deleteTaskSuccess, getTasksError, getTasksRequest, getTasksSuccess, updateTaskError,
  updateTaskRequest, updateTaskSuccess
} from '../action/stateActions';

export const asyncGetTasks = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTasksRequest());
      const tasks: Task[] | undefined = await TodoAPI.getAllTasks();
      dispatch(getTasksSuccess(tasks))
    } catch (error) {
      dispatch(getTasksError())
      console.log("getTasks " + error);
    }
  }
}

export const asyncAddTask = (newTask: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(addTaskRequest());
      await TodoAPI.createTask(newTask);
      dispatch(addTaskSuccess(newTask));
    } catch (error) {
      dispatch(addTaskError())
      console.log("addTask " + error);
    }
  }
}
export const asyncDeleteTask = (idTaskToDelete: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteTaskRequest())
      await TodoAPI.deleteTask(idTaskToDelete);
      dispatch(deleteTaskSuccess(idTaskToDelete))
    } catch (error) {
      dispatch(deleteTaskError())
      console.log("deleteTask " + error);
    }
  }
}
export const asyncUpdateTask = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateTaskRequest());
      await TodoAPI.updateTasks(task);
      console.log("updated");
      dispatch(updateTaskSuccess(task))
    } catch (error) {
      dispatch(updateTaskError())
      console.log("updateTask " + error);
    }
  }
}
