import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './i18n/i18n';
import i18next from 'i18next';

i18next.changeLanguage('en');
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
