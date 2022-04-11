import React from 'react';
import { CustomHeader } from '../containers/container/tasks/components/customHeader';
import { TasksContainer } from '../containers/container/tasks/tasks.container';

export const Tasks = () => {
  return (
    <>
      <CustomHeader/>
      <TasksContainer/>
    </>
  );
};
