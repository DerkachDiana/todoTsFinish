import React, { ChangeEvent, useState } from 'react';
import './styles/App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import HeaderComponent from './components/HeaderComponent';
import Button from './components/Button';
import AddArea from './components/AddArea';

export interface Task {
    id: string;
    text: string;
    checked: boolean;
}


// interface Tasks extends Array<Task>{};

function App()  {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskToDelete: Task): void => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id))
  }

  return (
    <div className="App">
        <HeaderComponent/>
        <TodoList tasks={tasks} toDelete={deleteTask}/>
        <AddArea createNewTask={createTask}/>
    </div>
    );
}

export default App;
