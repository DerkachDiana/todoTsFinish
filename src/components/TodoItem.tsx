import React from 'react';
import Button from './Button'
import { Task } from '../App';

interface TodoItemProps {
  task: Task,
  toDelete: (task: Task) => void
}
const TodoItem = (props: TodoItemProps) => {
  const { task, toDelete } = props

  const deleteTask = (task: Task) : void => {
    toDelete(task)
  }

  const crossOutTaskText = (e: React.MouseEvent): void => {
  }

  return (
    <div className="todoItem" id={task.id}>
      <div className="leftPartTodoItem">
        <input type="checkbox" onClick={crossOutTaskText}/>
        <div className="todoText">{task.text}</div>
      </div>

      <Button type={"delete"} onClick={() => deleteTask(task)}/>
    </div>
  );
};

export default TodoItem;
