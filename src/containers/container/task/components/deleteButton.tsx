import React from 'react';
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/task/trash-can.svg';

interface DeleteButtonProps {
  onClick: (e: React.MouseEvent) => void
}

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <div className="deleteButton" onClick={props.onClick}>
      <DeleteIcon/>
    </div>
  );
};
