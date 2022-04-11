import TodoAPI from '../../service/API/TodoAPI';
import { Dispatch } from '@reduxjs/toolkit';
import { Task } from '../../types/Task';
import {
  addTaskError, addTaskRequest, addTaskSuccess, deleteTaskError, deleteTaskRequest,
  deleteTaskSuccess, getTasksError, getTasksRequest, getTasksSuccess, updateTaskError,
  updateTaskRequest, updateTaskSuccess
} from '../action/stateActions';

export const getTasksThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTasksRequest());
      const tasks: Task[] | undefined = await TodoAPI.getAllTasks();
      dispatch(getTasksSuccess(tasks));
    } catch (error) {
      dispatch(getTasksError());
      console.log('getTasks ' + error);
    }
  };
};

export const addTaskThunk = (newTask: Omit<Task, '_id'>) => {
  return async (dispatch: Dispatch) => {
    dispatch(addTaskRequest());

    try {
      const task = await TodoAPI.createTask(newTask);

      if (task) {
        dispatch(addTaskSuccess(task));
      }
    } catch (error) {
      dispatch(addTaskError());
      console.log('addTask ' + error);
    }
  };
};

export const deleteTaskThunk = (idTaskToDelete: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteTaskRequest());
      await TodoAPI.deleteTask(idTaskToDelete);
      dispatch(deleteTaskSuccess(idTaskToDelete));
    } catch (error) {
      dispatch(deleteTaskError());
      console.log('deleteTask ' + error);
    }
  };
};

export const updateTaskThunk = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      await TodoAPI.updateTasks(task);
      dispatch(updateTaskSuccess(task));
    } catch (error) {
      dispatch(updateTaskError());
      console.log('updateTask ' + error);
    }
  };
};
