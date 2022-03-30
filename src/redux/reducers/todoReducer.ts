import { Task } from '../../types/Task';
import {
  TodoActions,
  REQUEST,
  SUCCESS,
  ERROR,
  GetTasksSuccessAT
} from '../action/types/actionsTypes';
import { AppState, AppStateType } from '../state/AppState';

type todoReducerType = {
  tasks: Task[],

}

const initialState: todoReducerType & AppStateType = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false
}

export const todoReducer = (state = initialState, action: TodoActions): todoReducerType | undefined => {
  switch (action.type) {
    case REQUEST.GET_TASKS_REQUEST: {
      console.log("todoReducer - 2");
      state.isLoading = true;
      return;
    }
    case REQUEST.ADD_TASK_REQUEST: {
      state.isLoading = true;
      const task = action.task

      return {
        ...state,
        tasks: [...state.tasks, task ]
      }
    }
    case REQUEST.DELETE_TASK_REQUEST: {
      state.isLoading = true;
      const filteredTasks =  state.tasks.filter((task: Task) => task._id !== action.taskId)

      return {
        ...state,
        tasks: filteredTasks
      }
    }
    case REQUEST.UPDATE_TASK_REQUEST: {
      state.isLoading = true;
      let taskIndex: number;
      let updateTasks: Task[];

      // todo refactor
      if (state.tasks) {
        state.tasks.find((task, index) => {
          if (task._id === action.task._id) {
            taskIndex = index
            updateTasks = state.tasks.splice(taskIndex, 1, action.task)
            return {
              ...state,
              tasks: [ updateTasks ]
            }
          }
        })
      }
      return;
    }
    case SUCCESS.GET_TASKS_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      const tasks = [...action.tasks]

      return {
        ...state,
        tasks
      };
    }
    case SUCCESS.ADD_TASK_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      break;
    }
    case SUCCESS.DELETE_TASK_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      break;
    }
    case SUCCESS.UPDATE_TASK_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      break;
    }
    case ERROR.GET_TASKS_ERROR: {
      state.isLoading = false;
      state.isError = true;
      break;
    }
    case ERROR.ADD_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      break;
    }
    case ERROR.DELETE_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      break;
    }
    case ERROR.UPDATE_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      break;
    }
    default:
      return state
  }
}