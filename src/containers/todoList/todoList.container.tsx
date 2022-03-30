import React, { useEffect } from 'react';
import { TodoListComponent } from './todoList.component';
import { Task } from '../../types/Task';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddTask, asyncGetTasks, asyncDeleteTask } from '../../redux/thunk/thunks';

import { IAppState } from '../../redux/store';
import { getTasksRequest } from '../../redux/action/stateActions';


interface TodoListContainerProps {
  isEntryAnimation: boolean
}

export const TodoListContainer =  (props: TodoListContainerProps) => {
  const { isEntryAnimation } = props
  const dispatch = useDispatch()
  const tasks = useSelector<IAppState, Task[] >(state => state.taskReducer.tasks)
  const isLoading = useSelector<IAppState, Task[]>(state => state.taskReducer.isLoading)
  // const isError = useSelector<IAppState, Task[]>(state => state.taskReducer.isError)
  // const isSuccess = useSelector<IAppState, Task[]>(state => state.taskReducer.isSuccess)
  // todo

  const getTasks = async () => {
    try {
      if (tasks) {
        // todo action for request
        dispatch(asyncGetTasks());


      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
     getTasks()
  }, [])

  const createTask = async (newTask: Task): Promise<void> => {
    //dispatch(AsyncAddTask(newTask))
    dispatch(asyncAddTask(newTask));
  }


  const deleteTask = async (taskToDelete: Task): Promise<void> => {
    //dispatch(AsyncDeleteTask(taskToDelete._id))
    dispatch(asyncDeleteTask(taskToDelete._id))
  }
  const animationType = (): string => {
    return (
      (isEntryAnimation) ? ("slideRight") : ("slideLeft")
    )

  }

  // todo return isLoading ? <Loading /> : your component

  return (
    isLoading ? <div>Loading</div> :
    <TodoListComponent
      tasks={tasks as Task[]}
      toDelete={deleteTask}
      createTask={createTask}
      animationType={animationType}
    />
  )
};
