import React, { useState } from 'react';
import { LoginComponent } from './login.component';
import { loginValidation, passwordValidation } from '../../../helpers/loginValidation';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const MOCK_LOGIN_DATA = {
  login: 'Grace@mail.ru',
  password: 'qwerty'
};

export const LoginContainer = () => {
  const navigate: NavigateFunction = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const userNameHandler = (name: string) => {
    setUserName(name);
  };

  const passwordHandler = (passwd: string) => {
    setPassword(passwd);
  };

  const onSignIn = () => {
    setIsError(false);

    const textError = document.querySelector('.textError') as HTMLElement;
    const isValidValues = loginValidation(userName) && passwordValidation(password, 6);
    const isExistingUser = userName === MOCK_LOGIN_DATA.login && password === MOCK_LOGIN_DATA.password;

    if (isValidValues && isExistingUser) {
      textError.style.display = 'none';
      navigate('/tasksPage');
    } else {
      textError.style.display = 'block';
      setIsError(true);
    }
  };

  return (
    <LoginComponent
      userNameHandler={userNameHandler}
      passwordHandler={passwordHandler}
      onSignIn={onSignIn}
      isError={isError}
    />
  );
};
