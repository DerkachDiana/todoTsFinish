import React from 'react';
import { DeleteButton } from './components/deleteButton';
import { Task } from '../../../types/Task';
import './styles.css';

interface TodoItemComponentProps {
  task: Task,
  toDelete: (task: Task) => void,
  checkboxUpdate: (isChecked: boolean) => void,
  saveTaskAfterEdit: (task: Task) => Promise<void>,
  navigateToDetails: () => void;
}
export const TaskComponent = ({ task, toDelete, checkboxUpdate, saveTaskAfterEdit, navigateToDetails }: TodoItemComponentProps) => {
  return (
    <div className="task">
      <div className="leftPartTask">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={(e) => {
            checkboxUpdate(e.target.checked);
          }}
        />
        <div
          onClick={navigateToDetails}
          className={ task.isChecked ? 'tasksText crossTask' : 'tasksText notCrossTask' }
          contentEditable={true}
          onBlur={(e) => saveTaskAfterEdit({ ...task, text: e.target.innerText })}>
          {task.text}
        </div>
      </div>
      <DeleteButton onClick={() => toDelete(task)}/>
    </div>
  );
};
