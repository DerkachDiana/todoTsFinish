import React from 'react';
import { Task } from '../../../types/Task';
import { TaskComponent } from './task.component';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskThunk } from '../../../redux/thunk/thunks';
import { RootState } from '../../../redux/store';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface TodoItemContainerProps {
  task: Task,
  toDelete: (task: Task) => void
}

export const TaskContainer = ({ task, toDelete }: TodoItemContainerProps) => {
  const dispatch = useDispatch();
  const isError = useSelector<RootState>(state => state.taskReducer.isError);

  const deleteTask = (task: Task): void => {
    toDelete(task);
  };

  const checkboxUpdate = async (isChecked: boolean): Promise<void> => {
    dispatch(updateTaskThunk({ ...task, isChecked: isChecked }));
  };

  const saveTaskAfterEdit = async (task: Task): Promise<void> => {
    dispatch(updateTaskThunk(task));
  };

  const navigate: NavigateFunction = useNavigate();

  const navigateToDetails = (): void => {
    navigate(`/TaskDetails/${task._id}`, {
      state: {
        id: task._id,
        text: task.text
      }
    });
  };

  const renderDataSaved = () => (
    <TaskComponent
      task={task}
      toDelete={deleteTask}
      checkboxUpdate={checkboxUpdate}
      saveTaskAfterEdit={saveTaskAfterEdit}
      navigateToDetails={navigateToDetails}
    />
  );

  const renderDataNotSaved = () => (
    <div>Данные не сохранились</div>
  );

  return (
    (isError) ? renderDataNotSaved() : renderDataSaved()
  );
};
