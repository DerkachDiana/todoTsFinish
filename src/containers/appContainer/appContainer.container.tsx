import React, { useEffect, useState } from 'react';
import { AppContainerComponent } from './appContainer.component';
import { Task } from '../../types/Task';



export const AppContainerContainer = () => {
  const [isEntry, setIsEntry] = useState<boolean> (false);
  const isEntryHandler = (isEntry: boolean): void => {
    console.log("in entryHandler " + isEntry)
    setIsEntry(isEntry)
  }
  return (
    <AppContainerComponent isEntryHandler={isEntryHandler} isEntryAnimation={isEntry}/>
  );
};