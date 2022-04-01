import React from 'react';
import { Task } from '../types/Task';

let defaultValueNewTask: Task = {
  _id: '',
  text: '',
  isChecked: false
};
let defaultValueIsEntry = false;
export const newTaskContext = React.createContext(defaultValueNewTask);

export const isShowAnimationContext = React.createContext(defaultValueIsEntry);
