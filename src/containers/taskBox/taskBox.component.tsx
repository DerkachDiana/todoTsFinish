import React from 'react';
import { MyHeader } from '../../components/myHeader';
import { TodoListContainer } from '../todoList/todoList.container';
import MyButton from '../../components/myButton';
import { Task } from '../../types/Task';

interface AppContainerComponentProps {
  isEntryHandler: (isEntry: boolean) => void,
  addTaskByPressEnter: (e: React.KeyboardEvent) => void,
  addNewTask: () => void,
  text: string,
  setTaskHandler: (event: string) => void
}

export const TaskBoxComponent = ({ isEntryHandler, addTaskByPressEnter, addNewTask, text, setTaskHandler }: AppContainerComponentProps) => {
  return (
    <div className="appContainer">
      <MyHeader isEntryHandler={isEntryHandler}/>
      <TodoListContainer addNewTask={ addNewTask }/>
      <div className='addBox'>
        <input
          value={text}
          onChange={event => setTaskHandler(event.target.value)}
          onKeyUp={addTaskByPressEnter}
          className="inputAddTask"
          type="text"/>
        <MyButton onClick={ () => {
          addNewTask();
        }} type={'add'} />
      </div>
    </div>
  );
};
