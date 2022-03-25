import Button from '../../components/Button';
import React from 'react';
import { Task } from '../../types/Task';
import "./styles.css"

interface AddAreaProps {
  addTaskByPressEnter: (e: React.KeyboardEvent) => void,
  addNewTask: () => void,
  text: string,
  setTaskHandler: (event: string) => void
}

const AddAreaComponent = (props: AddAreaProps) => {
  const { addTaskByPressEnter, addNewTask, text, setTaskHandler } = props;
  return (
    <div className="addArea">
      <input
        value={text}
        onChange={event => setTaskHandler(event.target.value)}
        onKeyUp={addTaskByPressEnter}
        className="inputAddTask"
        type="text"/>
      <Button onClick={ () => {
        addNewTask()
      }} type={"add"} />
    </div>
  );
};

export default AddAreaComponent;