// frontend stuffs for webpack
import './assets/css/styles.css';
import './index.html';
import './assets/images/sprite.svg';
import './assets/images/baguette.png';
import './assets/images/pain-de-campagne.png';
import './assets/images/brioche.png';
import './assets/images/croissant.png';
import './assets/images/cookie.png';
import './assets/images/donut.png';
import './assets/images/404.png';

// libs
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// config
import routes from './routes';
import configureStore from './store/configureStore';

const store   = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => window.scrollTo(0, 0)}
    />
  </Provider>,
  document.getElementById('root')
);