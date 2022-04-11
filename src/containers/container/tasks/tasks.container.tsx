import React, { useEffect, useState } from 'react';
import { TasksComponent } from './tasks.component';
import { CustomButton } from '../../../components/customButton';
import { Task } from '../../../types/Task';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskThunk, deleteTaskThunk, getTasksThunk } from '../../../redux/thunk/thunks';
import { tasksSelector, isLoadingSelector } from '../../../redux/selectors/selectors';
import i18n from 'i18next';

export const TasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [taskName, setTaskName] = useState<string>('');

  const getTasks = async () => {
    try {
      await dispatch(getTasksThunk());
    } catch (error) {
      console.log('getTasks' + error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addNewTask = (): void => {
    if (taskName.trim() === '') {
      return;
    }

    const newTask: Omit<Task, '_id'> = {
      text: taskName,
      isChecked: false
    };

    dispatch(addTaskThunk(newTask));
    setTaskName('');
  };

  const setTaskHandler = (event: string): void => {
    setTaskName(event);
  };

  const addTaskByPressEnter = (e: React.KeyboardEvent): void => {
    (e.keyCode === 13) && (addNewTask());
  };

  const deleteTask = async (taskToDelete: Task): Promise<void> => {
    dispatch(deleteTaskThunk(taskToDelete._id));
  };

  const renderContent = () => {
    return (
      <div className="tasksContainer">
        <TasksComponent
          tasks={tasks}
          deleteTask={deleteTask}
        />
        <div className='addBox'>
          <input
            value={taskName}
            onChange={event => setTaskHandler(event.target.value)}
            onKeyUp={addTaskByPressEnter}
            className="inputAddTask"
            type="text"
          />
          <CustomButton onClick={addNewTask} text={i18n.t('translation.addButton')} />
        </div>
      </div>
    );
  };
  return isLoading ? <div className="loading"/> : renderContent();
};
