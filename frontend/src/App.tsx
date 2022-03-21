import React, { useState } from 'react';
import './styles/App.css';
import { AppContainerContainer } from './containers/appContainer/appContainer.container';

export const App = () =>  {
  // const test = (id: string) => {
  //   // todo reduce
  //   const a = tasks.find(task => task.id === id)
  //   // todo change checked to different value
  //   // todo set new todos
  // }
  return (
    <div className="App">
       <AppContainerContainer/>
    </div>
    );
}