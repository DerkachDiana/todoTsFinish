import React, { ChangeEvent } from 'react';
import MyButton from '../../components/myButton';
import { Task } from '../../types/Task';
import './styles.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface TodoItemComponentProps {
  task: Task,
  toDelete: (task: Task) => void,
  crossOutTaskText: (checkboxElement: ChangeEvent<HTMLInputElement>) => void,
  saveTaskAfterEdit: (task: Task) => Promise<void>
}
export const TodoItemComponent = (props: TodoItemComponentProps) => {
  const { task, toDelete, crossOutTaskText, saveTaskAfterEdit } = props;
  const navigate: NavigateFunction = useNavigate();

  const navigateToDetails = (): void => {
    navigate(`/TaskDetails/${task._id}`, {
      state: {
        id: task._id,
        text: task.text
      }
    });
  };

  return (
    <div className="todoItem">
      <div className="leftPartTodoItem">
        <input
          type="checkbox"
          onChange={(e) => crossOutTaskText(e)}
        />
        <div
          onClick={navigateToDetails}
          className="todoText"
          contentEditable={true}
          onBlur={(e) => saveTaskAfterEdit({ ...task, text: e.target.innerHTML })}>
          {task.text}
        </div>
      </div>
      <MyButton type={'delete'} onClick={() => toDelete(task)}/>
    </div>
  );
};
