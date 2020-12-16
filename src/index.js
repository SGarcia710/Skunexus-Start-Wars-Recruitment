import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import reportWebVitals from './reportWebVitals';
import './assets/styles/tailwind.css';
import { Provider } from 'react-redux';
import store from './redux';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="bottom-center"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
