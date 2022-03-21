import React, { useState } from 'react';
import { TodoListComponent } from './todoList.component';
import { Task } from '../../types/Task';

const MOCK_TODOS: Task[] = [
  {
    id: '1',
    text: 'First',
    isChecked: false,
  },
  {
    id: '2',
    text: 'Second',
    isChecked: true,
  },
  {
    id: "3",
    text: 'Third',
    isChecked: false,
  }
]

interface TodoListContainerProps {
  isEntry: boolean
}

export const TodoListContainer = (props: TodoListContainerProps) => {
  const { isEntry } = props
  const [tasks, setTasks] = useState<Task[]>(MOCK_TODOS);

  const createTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskToDelete: Task): void => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id))
  }
  const animationType = (): string => {
    console.log("in AnimationType")
    return (
      (isEntry) ? ("slideRight") : ("slideLeft")
    )

  }

  return (
    <TodoListComponent
      tasks={tasks}
      toDelete={deleteTask}
      createTask={createTask}
      animationType={animationType}
    />
  )
};
