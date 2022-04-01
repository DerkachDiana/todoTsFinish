import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../media/menu.svg';

interface HeaderComponentProps {
  // todo rename
  isEntryHandler: (isEntry: boolean) => void
}

// todo add i18n(english, russian)

export const MyHeader = (props: HeaderComponentProps): JSX.Element => {
  const { isEntryHandler } = props;
  const [isEntry, setIsEntry] = useState<boolean>(true);

  // todo remove after implementing i18n
  const headerText = 'Website todo';

  const setEntryHandler = (): void => {
    setIsEntry(!isEntry);
    isEntryHandler(isEntry);
  };

  return (
    <div className="header">
      <MenuIcon className="navBarIcon" onClick={setEntryHandler} />
      <div className="title">{headerText}</div>
    </div>
  );
};
