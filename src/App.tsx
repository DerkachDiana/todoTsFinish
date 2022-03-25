import React, { useState } from 'react';
import './styles/App.css';
import { AppContainerContainer } from './containers/appContainer/appContainer.container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskDetails } from './pages/TaskDetalisation';


export const App = () =>  {
  return (
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppContainerContainer />} />
          <Route path="/TaskDetails/:taskId" element={<TaskDetails/>} />
        </Routes>
      </div>
     </BrowserRouter>
    );
}