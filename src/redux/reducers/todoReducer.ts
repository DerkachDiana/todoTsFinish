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
type AppType = todoReducerType & AppStateType;
const initialState: todoReducerType & AppStateType = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false
}

export const todoReducer = (state = initialState, action: TodoActions): AppType => {
  switch (action.type) {
    case REQUEST.GET_TASKS_REQUEST: {
      state.isLoading = true;
      return {
        ...state
      }
    }
    case SUCCESS.GET_TASKS_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      const tasks = [...action.tasks]

      return {
        ...state,
        tasks
      }
    }
    case REQUEST.ADD_TASK_REQUEST: {
      state.isLoading = true;

      return {
        ...state
      }
    }
    case SUCCESS.ADD_TASK_SUCCESS: {
      state.isSuccess = true;
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isLoading: false
      };
    }
    case REQUEST.DELETE_TASK_REQUEST: {
      state.isLoading = true;
      return {
        ...state
      }
    }
    case SUCCESS.DELETE_TASK_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;
      const filteredTasks =  state.tasks.filter((task: Task) => task._id !== action.taskId)

      return {
        ...state,
        tasks: filteredTasks
      }
    }
    case REQUEST.UPDATE_TASK_REQUEST: {
      state.isLoading = true;
      return {
        ...state
      }
    }

    case SUCCESS.UPDATE_TASK_SUCCESS: {
      state.isLoading = false;
      state.isSuccess = true;

      const updatedTasks: Task[] = state.tasks.map(task =>
      {
        if (task._id === action.task._id) {
          return {
            ...task, text: action.task.text, isChecked: action.task.isChecked
          }
        }
        return task
      })

      return {
        ...state,
        tasks: updatedTasks
      };
    }
    case ERROR.GET_TASKS_ERROR: {
      state.isLoading = false;
      state.isError = true;
      return {
        ...state
      }
    }
    case ERROR.ADD_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      return {
        ...state
      }
    }
    case ERROR.DELETE_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      return {
        ...state
      }
    }
    case ERROR.UPDATE_TASK_ERROR: {
      state.isLoading = false;
      state.isError = true;
      return {
        ...state
      }
    }
    default:
      return state
  }
}