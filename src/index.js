import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import { configureStore } from './store';
import * as Api from './services/api';

export const history = createBrowserHistory();
const store = configureStore({ Api, history })();

ReactDOM.render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
