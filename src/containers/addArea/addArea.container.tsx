import React, { useState } from 'react';
import AddAreaComponent from './addArea.component';
import { Task } from '../../types/Task';
import { useDispatch } from 'react-redux';

interface AddAreaContainerProps {
  createNewTask: (newTask: Task) => void
}

export const AddAreaContainer = ({createNewTask}: AddAreaContainerProps) => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch()
  const addNewTask = (): void => {
    if (text.trim() === "") {
      return
    }
    const newTask: Task = {
      _id: Date.now().toString(),
      text: text,
      isChecked: false
    }
    createNewTask(newTask)
    setText('')
  }
  const setTaskHandler = (event: string): void => {
      setText(event);
  }
  const addTaskByPressEnter = (e: React.KeyboardEvent): void => {
    (e.keyCode === 13) && (addNewTask())
  }
  return (
    <AddAreaComponent
      addNewTask={addNewTask}
      addTaskByPressEnter={addTaskByPressEnter}
      text={text}
      setTaskHandler={setTaskHandler}    />
  );
};
