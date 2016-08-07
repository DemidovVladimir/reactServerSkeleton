import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import './styles/app.css';

var preloadedState = window.__REDUX_STATE__;
preloadedState = JSON.parse(preloadedState);

const store = configureStore(preloadedState);

render((
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
), document.getElementById('root'));
