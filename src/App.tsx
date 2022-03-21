import React, { useState } from 'react';
import './styles/App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { TodoListContainer } from './containers/todoList/todoList.container';

const App = () =>  {
  const [isEntry, setIsEntry] = useState<boolean> (false);

  // TODO: create main component get rid of state in app
  // const test = (id: string) => {
  //   // todo reduce
  //   const a = tasks.find(task => task.id === id)
  //   // todo change checked to different value
  //   // todo set new todos
  // }

  const isEntryHandler = (isEntry: boolean): void => {
    console.log("in entryHandler " + isEntry)
    setIsEntry(isEntry)
  }

  return (
    <div className="App">
        <HeaderComponent isEntryHandler={isEntryHandler}/>
        <TodoListContainer isEntry={isEntry}/>
    </div>
    );
}

export default App;
