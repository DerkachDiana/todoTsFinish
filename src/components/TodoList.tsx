import React from 'react';
import TodoItem from './TodoItem';
import { Task } from '../App';

interface TodoListProps {
  tasks: Task[],
  toDelete: (task: Task) => void
}


const TodoList = (props: TodoListProps) => {
  const { tasks, toDelete } = props


  return (
    <div className="todoList">
      {tasks.map(task =>
        <TodoItem task={task} key={task.id} toDelete={toDelete} />
      )}
    </div>
  );
};

export default TodoList;