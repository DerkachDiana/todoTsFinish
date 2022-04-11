import React from 'react';
import './style.css';

interface LoginInputProps {
  id: string
  title: string,
  textHandler: (name: string) => void;
  isError?: boolean;
}
export const LoginInput = ({ title, textHandler, id, isError }: LoginInputProps) => {
  return (
    <div id={id} className={ isError ? 'loginForm inputWithError' : 'loginForm inputWithoutError' }>
      <div className="title">{ title }</div>
      <input
        className="editText"
        type="text"
        onChange={(event) => textHandler(event.target.value)}/>
    </div>
  );
};
