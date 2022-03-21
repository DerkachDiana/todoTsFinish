import React  from 'react';
import Button from '../../components/Button'
import { Task } from '../../types/Task';
import "./styles.css"

interface TodoItemComponentProps {
  task: Task,
  toDelete: (task: Task) => void,
  crossOutTaskText: () => void,
  isChecked: boolean
}
export const TodoItemComponent = (props: TodoItemComponentProps) => {
  const {task, toDelete, crossOutTaskText, isChecked} = props

  return (
    <div className="todoItem">
      <div className="leftPartTodoItem">
        <input
          type="checkbox"
          onChange={crossOutTaskText}
          checked={isChecked}
        />
        <div className="todoText" contentEditable={true}>{task.text}</div>
      </div>

      <Button type={"delete"} onClick={() => toDelete(task)}/>
    </div>
  );
}
