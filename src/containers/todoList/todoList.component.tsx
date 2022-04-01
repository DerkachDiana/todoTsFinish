import React from 'react';
import { Task } from '../../types/Task';
import { TodoItemContainer } from '../todoItem/todoItem.container';
import './styles.css';
import { TaskBoxContainer } from '../taskBox/taskBox.container';

interface TodoListComponentProps {
  tasks: Task[],
  toDelete: (task: Task) => void,
  animationType: () => string,
}

export const TodoListComponent = (props: TodoListComponentProps) => {
  const { tasks, toDelete, animationType } = props;
  return (
    <div className="todoList">
      <div className={animationType()}>
        {tasks.map(task =>
          <TodoItemContainer
            task={task}
            toDelete={toDelete}
            key={task._id}
          />
        )}
      </div>
    </div>
  );
};
