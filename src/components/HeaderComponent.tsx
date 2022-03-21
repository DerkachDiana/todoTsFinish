import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from "../media/menu.svg"

interface HeaderComponentProps {
  isEntryHandler: (isEntry: boolean) => void
}

export const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
  const { isEntryHandler } = props
  const [isEntry, setIsEntry] = useState<boolean>(true)

  const headerText = "Website todo"
  const setEntryHandler = (): void => {
    setIsEntry(!isEntry)
    isEntryHandler(isEntry)
  }
  return (
    <div className="header">
      <div className="navBarIcon" onClick={setEntryHandler}>
        <MenuIcon/>
      </div>
      <div className="title">{headerText}</div>
    </div>
  );
};

