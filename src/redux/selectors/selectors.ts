import { RootState } from '../store';
import { Task } from '../../types/Task';

export const tasksSelector = (state: RootState): Task[] => state.taskReducer.tasks;
export const isLoadingSelector = (state: RootState): boolean => state.taskReducer.isLoading;
