import TodoAPI from '../../service/API/TodoAPI';
import { REQUEST } from '../action/types/actionsTypes';
import { Dispatch } from '@reduxjs/toolkit';
import { Task } from '../../types/Task';
import { getTasksRequest, getTasksSuccess } from '../action/stateActions';

export const asyncGetTasks = () => {
  return async (dispatch: Dispatch) => {
    console.log("asyncGetTask - 1");
    try {
      dispatch(getTasksRequest())
      const tasks: Task[] | undefined = await TodoAPI.getAllTasks();
      dispatch(getTasksSuccess(tasks))

    } catch (error) {
      console.log("getTasks " + error);
    }

  }
}

export const asyncAddTask = (newTask: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log("in return asyncAddTask");
      await TodoAPI.createTask(newTask);
      dispatch({
        type: REQUEST.ADD_TASK_REQUEST,
        task: newTask
      })
    } catch (error) {
      console.log("addTask " + error);
    }

  }
}
export const asyncDeleteTask = (idTaskToDelete: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await TodoAPI.deleteTask(idTaskToDelete);
      dispatch({
        type: REQUEST.DELETE_TASK_REQUEST,
        taskId: idTaskToDelete
      })
    } catch (error) {
      console.log("deleteTask " + error);
    }

  }
}
export const asyncUpdateTask = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      await TodoAPI.updateTasks(task);
      console.log("updated");
      dispatch({
        type: REQUEST.UPDATE_TASK_REQUEST,
        task: task
      })
    } catch (error) {
      console.log("updateTask " + error);
    }

  }
}