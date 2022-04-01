import React, { useEffect, useContext } from 'react';
import { TodoListComponent } from './todoList.component';
import { Task } from '../../types/Task';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddTask, asyncGetTasks, asyncDeleteTask } from '../../redux/thunk/thunks';
import { isShowAnimationContext } from '../../context/context';

import { RootState } from '../../redux/store';

interface TodoListContainerProps {
  addNewTask: () => void;
}

export const TodoListContainer = ({ addNewTask }: TodoListContainerProps) => {
  const dispatch = useDispatch();
  const tasks = useSelector<RootState>(state => state.taskReducer.tasks);
  const isLoading = useSelector<RootState>(state => state.taskReducer['isLoading']);

  const getTasks = async () => {
    try {
      if (tasks) {
        dispatch(asyncGetTasks());
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (): Promise<void> => {
    dispatch(asyncAddTask(newTask));
  };
  const createTaskContext = React.createContext(createTask);
  const deleteTask = async (taskToDelete: Task): Promise<void> => {
    dispatch(asyncDeleteTask(taskToDelete._id));
  };
  const isShowAnimation = useContext(isShowAnimationContext);
  const animationType = (): string => {
    return (
      (isShowAnimation) ? ('slideRight') : ('slideLeft')
    );
  };

  return (
    isLoading ? <div>Loading...</div> :
      <TodoListComponent
        tasks={tasks as Task[]}
        toDelete={deleteTask}
        animationType={animationType}
      />
  );
};
