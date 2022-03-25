import TodoAPI from '../../service/API/TodoAPI'
import { Task } from '../../types/Task';
import { GET_TASKS, TodoActions, DELETE_TASK, ADD_TASK } from '../action/types/actionsTypes';


type todoReducerType = {
  tasks: Task[]
}

const initialState: todoReducerType = {
  tasks: []
}


export default function todoReducer(state = initialState, action: TodoActions): todoReducerType {
  switch (action.type) {
    case GET_TASKS: {
      const tasks = action.tasks

      return {
        ...state,
        tasks
      }
    }
    case DELETE_TASK: {
      const taskId = action.taskId
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task._id !== taskId)
      }
    }
    case ADD_TASK: {
      const task = action.task
      return {
        ...state,
        tasks: [...state.tasks, task ]
      }
    }
    default:
      return state
  }
}
