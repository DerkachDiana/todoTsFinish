import React, { ChangeEvent } from 'react';
import { Task } from '../../types/Task';
import { TodoItemComponent } from './todoItem.component'
import TodoAPI from '../../TodoAPI';

interface TodoItemContainerProps {
  task: Task,
  toDelete: (task: Task) => void
}

export const TodoItemContainer = (props: TodoItemContainerProps) => {
  const { task, toDelete } = props

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
    try {
      await TodoAPI.updateTasks(task)
    } catch(error) {
      console.log('saveTaskAfterEdit error ' + error)
    }
  }

  return (
    <TodoItemComponent
      task={task}
      toDelete={deleteTask}
      crossOutTaskText={crossOut}
      saveTaskAfterEdit={saveTaskAfterEdit}/>
  );

}