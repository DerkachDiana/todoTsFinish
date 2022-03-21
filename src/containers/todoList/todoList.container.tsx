import React, { useState, useEffect } from 'react';
import { TodoListComponent } from './todoList.component';
import { Task } from '../../types/Task';
import TodoAPI from '../../TodoAPI';


interface TodoListContainerProps {
  isEntry: boolean
}

export const TodoListContainer =  (props: TodoListContainerProps) => {
  const { isEntry } = props
  const [tasks, setTasks] = useState<Task[]>([]);

const taskLoader = async () => {
  try {
    const pulledTask = await TodoAPI.getAllTasks();
    pulledTask?.forEach(task => tasks.push(task));
  } catch(error) {
    console.log('TodoListContainer Error ' + error)
  }
}
  document.addEventListener("DOMContentLoaded", taskLoader);
  const createTask = async (newTask: Task): Promise<void> => {
    try {
      await TodoAPI.createTask(newTask);
    } catch(error) {
      console.log('createTask error ' + error)
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (taskToDelete: Task): Promise<void> => {
    try {
      console.log(taskToDelete)
      await TodoAPI.deleteTask(taskToDelete._id)
    } catch(error) {
      console.log('deleteTask error ' + error)
    }
    setTasks(tasks.filter(task => task._id !== taskToDelete._id))
  }
  const animationType = (): string => {
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
