import React from 'react';

interface AddButtonProps {
  onClick: (e: React.MouseEvent) => void,
  text: string;
}
export const CustomButton = ({ onClick, text }: AddButtonProps) => {
  return (
    <div className="customButton" onClick={onClick} >
      { text }
    </div>
  );
};
