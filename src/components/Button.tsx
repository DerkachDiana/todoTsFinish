import React, {useState} from 'react';

interface ButtonProps {
  type: string,
  onClick: (e: React.MouseEvent) => void
}

const Button = (props: ButtonProps) => {

  return (
    (props.type === "delete") ? (
      <input type="button" className="deleteButton" onClick={props.onClick}/>
    ) : (
      <input type="button" className="addButton" onClick={props.onClick} value="+ New task" />
    )
  )
}
export default Button;