import React from 'react';
import './styles/App.css';
import { TaskBoxContainer } from './containers/taskBox/taskBox.container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskDetails } from './pages/TaskDetalisation';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<TaskBoxContainer/>} />
          <Route path="/TaskDetails/:taskId" element={<TaskDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
