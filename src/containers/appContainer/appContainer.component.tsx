import React from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TodoListContainer } from '../todoList/todoList.container';

interface AppContainerComponentProps {
  isEntryHandler: (isEntry: boolean) => void,
  isEntry: boolean
}

export const AppContainerComponent = (props: AppContainerComponentProps) => {
  const { isEntryHandler, isEntry } = props
  return (
    <div className="appContainer">
      <HeaderComponent isEntryHandler={isEntryHandler}/>
      <TodoListContainer isEntry={isEntry}/>
    </div>
  );
};
