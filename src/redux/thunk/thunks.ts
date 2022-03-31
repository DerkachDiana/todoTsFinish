import TodoAPI from '../../service/API/TodoAPI';
import { REQUEST, SUCCESS } from '../action/types/actionsTypes';
import { Dispatch } from '@reduxjs/toolkit';
import { Task } from '../../types/Task';
import {
  addTaskError,
  addTaskSuccess, deleteTaskError,
  deleteTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess, updateTaskError, updateTaskSuccess
} from '../action/stateActions';

export const asyncGetTasks = () => {
  return async (dispatch: Dispatch) => {
    try {
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
      await TodoAPI.updateTasks(task);
      console.log("updated");
      dispatch(updateTaskSuccess(task))
    } catch (error) {
      dispatch(updateTaskError())
      console.log("updateTask " + error);
    }

  }
}