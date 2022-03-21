import React, { useState } from 'react';
import AddAreaComponent from './addArea.component';
import { Task } from '../../types/Task';

interface AddAreaContainerProps {
  createNewTask: (newTask: Task) => void
}

export const AddAreaContainer = ({createNewTask}: AddAreaContainerProps) => {
  const [text, setText] = useState<string>('');

  const addNewTask = (): void => {
    const newTask: Task = {
      id: (Date.now()).toString(),
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
      createNewTask={createNewTask}
      addTaskByPressEnter={addTaskByPressEnter}
      text={text}
      setTaskHandler={setTaskHandler}    />
  );
};
