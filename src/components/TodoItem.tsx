import React from 'react';

interface TodoItemProp {
  id: string;
  text: string;
  checked: boolean;
}
const TodoItem = (props: TodoItemProp) => {
  console.log(props)
  return (
    <div className="todoItem" id={props.id}>
      <input type="checkbox" checked={props.checked}/>
      <div className="todoText">{props.text}</div>
    </div>
  );
};

export default TodoItem;