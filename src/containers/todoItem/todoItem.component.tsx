import React, { ChangeEvent } from 'react';
import Button from '../../components/Button'
import { Task } from '../../types/Task';
import "./styles.css"

interface TodoItemComponentProps {
  task: Task,
  toDelete: (task: Task) => void,
  crossOutTaskText: (checkboxElement: ChangeEvent<HTMLInputElement>) => void,
  saveTaskAfterEdit: (task: Task) => Promise<void>
}
export const TodoItemComponent = (props: TodoItemComponentProps) => {
  const {task, toDelete, crossOutTaskText, saveTaskAfterEdit} = props

  return (
    <div className="todoItem">
      <div className="leftPartTodoItem">
        <input
          type="checkbox"
          onChange={(e) => crossOutTaskText(e)}
        />
        <div className="todoText" contentEditable={true} onBlur={(e) => saveTaskAfterEdit({...task, text: e.target.innerHTML})}>{task.text}</div>
      </div>

      <Button type={"delete"} onClick={() => toDelete(task)}/>
    </div>
  );
}
