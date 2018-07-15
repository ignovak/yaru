import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store';
import * as postActions from './actions/postActions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import posts from './data';

const store = configureStore();
store.dispatch(postActions.loadPosts(posts));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
