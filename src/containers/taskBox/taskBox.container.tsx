import React, { useContext, useState } from 'react';
import { TaskBoxComponent } from './taskBox.component';
import { Task } from '../../types/Task';
import { isShowAnimationContext } from '../../context/context';
import { newTaskContext } from '../../context/context';

export const TaskBoxContainer = () => {
  const [isEntry, setIsEntry] = useState<boolean> (false);
  const [text, setText] = useState<string>('');
  const isEntryHandler = (isEntry: boolean): void => {
    console.log('in entryHandler ' + isEntry);
    setIsEntry(isEntry);
  };
  let newTaskToTransfer: Task;
  const addNewTask = (): void => {
    if (text.trim() === '') {
      return;
    }
    const newTask: Task = {
      _id: Date.now().toString(),
      text: text,
      isChecked: false
    };
    newTaskToTransfer = useContext(newTaskContext);
    setText('');
  };
  const setTaskHandler = (event: string): void => {
    setText(event);
  };
  const addTaskByPressEnter = (e: React.KeyboardEvent): void => {
    (e.keyCode === 13) && (addNewTask());
  };
  return (
    <div>
      <isShowAnimationContext.Provider value={isEntry}>
        <newTaskContext.Provider value={newTaskToTransfer}>
          <TaskBoxComponent isEntryHandler={isEntryHandler}
            addNewTask={addNewTask}
            addTaskByPressEnter={addTaskByPressEnter}
            text={text}
            setTaskHandler={setTaskHandler}
          />
        </newTaskContext.Provider>
      </isShowAnimationContext.Provider>
    </div>

  );
};
