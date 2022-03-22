import React from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TodoListContainer } from '../todoList/todoList.container';

interface AppContainerComponentProps {
  isEntryHandler: (isEntry: boolean) => void,
  isEntryAnimation: boolean
}

export const AppContainerComponent = (props: AppContainerComponentProps) => {
  const { isEntryHandler, isEntryAnimation } = props
  return (
    <div className="appContainer">
      <HeaderComponent isEntryHandler={isEntryHandler}/>
      <TodoListContainer isEntryAnimation={isEntryAnimation}/>
    </div>
  );
};
