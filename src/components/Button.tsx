import React from 'react';
import { ReactComponent as DeleteIcon } from "../media/trash-can.svg"

interface ButtonProps {
  type: string,
  onClick: (e: React.MouseEvent) => void
}

const Button = (props: ButtonProps) => {
  return (
    (props.type === "delete") ? (
      <div className="deleteButton" onClick={props.onClick}>
        <DeleteIcon/>
      </div>
    ) : (
      <div className="addButton" onClick={props.onClick} >+ New task </div>
    )
  )
}
export default Button;