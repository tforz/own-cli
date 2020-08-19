import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import router from './router/router';
import App from './App';
import history from './router/history';
import authRouter from './router/authRouter';

import { Loading, Toast } from 'components';
import { store } from './store'

import * as serviceWorker from './serviceWorker';

const isLogin = true

ReactDOM.render(
  <Router history={history}>
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <App>{authRouter(router, isLogin)}</App>
        <Toast />
      </Provider>
    </React.Suspense>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
