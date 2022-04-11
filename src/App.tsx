import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskDetails } from './pages/taskDetalisation';
import { Tasks } from './pages/tasks';
import { Login } from './pages/login';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/tasksPage" element={<Tasks/>} />
          <Route path="/TaskDetails/:taskId" element={<TaskDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
