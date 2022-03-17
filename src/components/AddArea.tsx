import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import { Task } from '../App';

interface AddAreaProps {
  createNewTask: (newTask: Task) => void
}

const AddArea = (props: AddAreaProps) => {
  const [task, setTask] = useState<Task>({id: '', text: '', checked: false});

  const { createNewTask } = props;

  const addNewTask = (): void => {
    const newTask: Task = {
      id: (Date.now()).toString(),
      text: task.text,
      checked: false
    }
    createNewTask(newTask)
    setTask({...task, text: ''})
  }

  return (
    <div className="addArea">
      <input
        value={task.text}
        onChange={e => setTask({...task, text: e.target.value})}
        className="inputAddTask"
        type="text"/>
      <Button onClick={addNewTask} type={"add"} />
    </div>
  );
};

export default AddArea;