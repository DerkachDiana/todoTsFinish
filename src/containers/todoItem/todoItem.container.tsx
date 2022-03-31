import React, { ChangeEvent, useEffect } from 'react';
import { Task } from '../../types/Task';
import { TodoItemComponent } from './todoItem.component';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateTask } from '../../redux/thunk/thunks';
import { updateTaskRequest } from '../../redux/action/stateActions';
import { RootState } from '../../redux/store';

interface TodoItemContainerProps {
  task: Task,
  toDelete: (task: Task) => void
}

export const TodoItemContainer = (props: TodoItemContainerProps) => {
  const { task, toDelete } = props
  const dispatch = useDispatch();
  const isError = useSelector<RootState>(state => state.taskReducer['isError'])

  const deleteTask = (task: Task): void => {
    toDelete(task)
  }
  const crossOut = (checkboxElement: ChangeEvent<HTMLInputElement>): void => {
    if (checkboxElement.target.parentElement) {
      (checkboxElement.target.checked)
        ? checkboxElement.target.parentElement.style.textDecoration = "line-through"
        : checkboxElement.target.parentElement.style.textDecoration = "none"
    }
  }

  const saveTaskAfterEdit = async(task: Task): Promise<void> => {
    //dispatch(AsyncUpdateTask(task))
    dispatch(updateTaskRequest());
    dispatch(asyncUpdateTask(task))
  }

  return (
    (isError) ? <div>Данные не сохранились</div> :
    <TodoItemComponent
      task={task}
      toDelete={deleteTask}
      crossOutTaskText={crossOut}
      saveTaskAfterEdit={saveTaskAfterEdit}/>
  );

}