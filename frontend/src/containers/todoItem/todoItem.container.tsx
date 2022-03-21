import React, { useState } from 'react';
import { Task } from '../../types/Task';
import { TodoItemComponent } from './todoItem.component'

interface TodoItemContainerProps {
  task: Task,
  toDelete: (task: Task) => void
}

export const TodoItemContainer = (props: TodoItemContainerProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { task, toDelete } = props

  const deleteTask = (task: Task) : void => {
    toDelete(task)
  }

  const toCrossOut: HTMLInputElement | null = document.querySelector('.todoText');
  const crossOut = () : void => {
    if (toCrossOut) {
      (isChecked)
        ? toCrossOut.style.textDecoration = "none"
        : toCrossOut.style.textDecoration = "line-through"
    }
    setIsChecked(!isChecked)
  }

  const setIsCheckHandler = (): void => {
    setIsChecked(!isChecked)
  }


  return (
    <TodoItemComponent
      task={task}
      toDelete={deleteTask}
      crossOutTaskText={crossOut}
      isChecked={isChecked}
    />
  );

}