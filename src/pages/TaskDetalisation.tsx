import React from 'react';
import { useLocation } from 'react-router-dom';

type LocationStateType = {
    id: string,
    text: string
}

export const TaskDetails = () => {
  const location = useLocation();
  const state = location.state as LocationStateType

  return (
    <div>
      <h1>{"id: " + state.id}</h1>
      <p>{"text: " + state.text}</p>
    </div>
  );
};

