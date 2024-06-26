import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import config from './config.json';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import ErrorBoundary from './components/utility/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
axios.defaults.baseURL = config.apiURI;

root.render(
  <BrowserRouter>
      <Provider store={store}>
      {/* <ErrorBoundary> */}
        <App />
      {/* </ErrorBoundary> */}
      </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
