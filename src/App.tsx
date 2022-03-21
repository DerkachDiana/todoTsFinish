import React, { useState } from 'react';
import './styles/App.css';
import { AppContainerContainer } from './containers/appContainer/appContainer.container';

export const App = () =>  {
  return (
    <div className="App">
       <AppContainerContainer/>
    </div>
    );
}