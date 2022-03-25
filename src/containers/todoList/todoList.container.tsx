import React, { useState, useEffect } from 'react';
import { TodoListComponent } from './todoList.component';
import { Task } from '../../types/Task';
import TodoAPI from '../../service/API/TodoAPI';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction, getTasksAction, addTaskAction } from '../../redux/action/actions';


interface TodoListContainerProps {
  isEntryAnimation: boolean
}

export const TodoListContainer =  (props: TodoListContainerProps) => {
  const { isEntryAnimation } = props
  const dispatch = useDispatch()
  const tasks = useSelector<any>(state => state.taskReducer.tasks)

  console.log('I AM HERE', tasks);
  const getTasks = async () => {
    try {
      const tasks = await TodoAPI.getAllTasks()
      if (tasks) {
        dispatch(getTasksAction(tasks))
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
     getTasks()
  }, [])

  const createTask = async (newTask: Task): Promise<void> => {
    try {
      await TodoAPI.createTask(newTask);
    } catch(error) {
      console.log('createTask error ' + error)
    }
    dispatch(addTaskAction(newTask))
  }


  const deleteTask = async (taskToDelete: Task): Promise<void> => {
    try {
      console.log(taskToDelete)
      await TodoAPI.deleteTask(taskToDelete._id)
    } catch(error) {
      console.log('deleteTask error ' + error)
    }
    dispatch(deleteTaskAction(taskToDelete._id))
  }
  const animationType = (): string => {
    return (
      (isEntryAnimation) ? ("slideRight") : ("slideLeft")
    )

  }

  return (
    <TodoListComponent
      tasks={tasks as Task[]}
      toDelete={deleteTask}
      createTask={createTask}
      animationType={animationType}
    />
  )
};
