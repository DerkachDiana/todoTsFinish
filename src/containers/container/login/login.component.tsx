import React from 'react';
import { LoginInput } from './components/loginInput';
import { CustomButton } from '../../../components/customButton';
import './style.css';
import { useTranslation } from 'react-i18next';

interface LoginComponentProps {
  userNameHandler: (name: string) => void,
  passwordHandler: (passwd: string) => void,
  onSignIn: () => void;
  isError: boolean;
}

export const LoginComponent = ({ userNameHandler, passwordHandler, onSignIn, isError }: LoginComponentProps) => {
  const [t, i18n] = useTranslation();
  return (
    <div className='login'>
      <div className='headerTitle'>{i18n.t('translation.header')}</div>
      <LoginInput isError={isError}
        title={i18n.t('translation.user')}
        textHandler={userNameHandler} id={'userName'}
      />
      <LoginInput isError={isError}
        title={i18n.t('translation.password')}
        textHandler={passwordHandler} id={'password'}
      />
      <div className="textError">{i18n.t('translation.errorMsg')}</div>
      <CustomButton text={i18n.t('translation.button')} onClick={onSignIn}/>
    </div>
  );
};
