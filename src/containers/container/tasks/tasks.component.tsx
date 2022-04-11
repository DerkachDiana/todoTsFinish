import React from 'react';
import { TaskContainer } from '../task/task.container';
import { Task } from '../../../types/Task';
import './styles.css';

interface TasksComponentProps {
  tasks: Task[],
  deleteTask: (task: Task) => void
}

export const TasksComponent = ({ tasks, deleteTask }: TasksComponentProps) => {
  const renderTasks = () => (
    <div className="taskList">
      {tasks.map(task =>
        <TaskContainer
          task={task}
          toDelete={deleteTask}
          key={task._id}
        />
      )}
    </div>
  );

  const renderNoTasks = () => (
    <div className='taskList'>There is no tasks here...</div>
  );

  return (
    tasks.length === 0 ? renderNoTasks() : renderTasks()
  );
};
