import React  from 'react';
import { Task } from '../../types/Task';
import { TodoItemContainer } from '../todoItem/todoItem.container';
import { AddAreaContainer } from '../addArea/addArea.container';
import "./styles.css"

interface TodoListComponentProps {
  tasks: Task[],
  toDelete: (task: Task) => void,
  createTask: (newTask: Task) => void,
  animationType: () => string
}

export const TodoListComponent = (props: TodoListComponentProps) => {
  const { tasks, toDelete, createTask, animationType } = props

  return (
    <div className="todoList">
      <div className={animationType()}>
        {tasks.map(task =>
          <TodoItemContainer
            task={task}
            toDelete={toDelete}
            key={task.id}
          />
        )}
      </div>
      <AddAreaContainer createNewTask={createTask} />
    </div>
  );
};
