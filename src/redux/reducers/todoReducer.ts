import { Task } from '../../types/Task';
import { TodoActions, SUCCESS_TYPE_ENUM, REQUEST_TYPE_ENUM, ERROR_TYPE_ENUM } from '../action/types/actionsTypes';
import { AppStateType } from '../state/AppState';

type todoReducerType = {
  tasks: Task[],
}
type AppType = todoReducerType & AppStateType;
const initialState: todoReducerType & AppStateType = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false
};

export const todoReducer = (state = initialState, action: TodoActions): AppType => {
  switch (action.type) {
  case REQUEST_TYPE_ENUM.GET_TASKS_REQUEST:
  case REQUEST_TYPE_ENUM.ADD_TASK_REQUEST:
  case REQUEST_TYPE_ENUM.DELETE_TASK_REQUEST:
  case REQUEST_TYPE_ENUM.UPDATE_TASK_REQUEST: {
    state.isLoading = true;

    return { ...state };
  }
  case SUCCESS_TYPE_ENUM.GET_TASKS_SUCCESS: {
    state.isLoading = false;
    state.isSuccess = true;
    const tasks = [...action.tasks];

    return {
      ...state,
      tasks
    };
  }
  case SUCCESS_TYPE_ENUM.ADD_TASK_SUCCESS: {
    state.isSuccess = true;
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      isLoading: false
    };
  }
  case SUCCESS_TYPE_ENUM.DELETE_TASK_SUCCESS: {
    state.isLoading = false;
    state.isSuccess = true;
    const filteredTasks = state.tasks.filter((task: Task) => task._id !== action.taskId);

    return {
      ...state,
      tasks: filteredTasks
    };
  }
  case SUCCESS_TYPE_ENUM.UPDATE_TASK_SUCCESS: {
    state.isLoading = false;
    state.isSuccess = true;

    const updatedTasks = state.tasks.map(task =>
    {
      if (task._id === action.task._id) {
        return {
          ...task, isChecked: action.task.isChecked, text: action.task.text
        };
      }
      return task;
    });
    console.log(state);
    return {
      ...state,
      tasks: updatedTasks
    };
  }

  case ERROR_TYPE_ENUM.ADD_TASK_ERROR:
  case ERROR_TYPE_ENUM.DELETE_TASK_ERROR:
  case ERROR_TYPE_ENUM.UPDATE_TASK_ERROR:
  case ERROR_TYPE_ENUM.GET_TASKS_ERROR: {
    state.isLoading = false;
    state.isError = true;
    return {
      ...state
    };
  }
  default:
    return state;
  }
};
