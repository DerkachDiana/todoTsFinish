import React from 'react';
import { ReactComponent as DeleteIcon } from '../media/trash-can.svg'

interface ButtonProps {
  type: string,
  onClick: (e: React.MouseEvent) => void
}

const MyButton = (props: ButtonProps) => {
  // todo refactor
  return (
    (props.type === 'delete') ? (
      <div className="deleteButton" onClick={props.onClick}>
        <DeleteIcon/>
      </div>
    ) : (
      // todo empty space
      <div className="addButton" onClick={props.onClick} >
        + New task
      </div>
    )
  )
}
// todo ;
export default MyButton
