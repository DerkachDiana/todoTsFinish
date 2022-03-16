import React, { useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css';
import TodoItem from './components/TodoItem';

interface TodoItems {
     id: string
    text: string;
    checked: boolean;
}

function App()  {
  const [todoItems, setTodoItems] = useState<TodoItems>(
    { id: "1", text: "Do nothing", checked: {false} }
  );

  return (
    <TodoItem id="1" text="Do nothing" checked={false}/>
    );
}

export default App;
