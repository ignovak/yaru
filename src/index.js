import React from 'react';
import { render } from 'react-dom';
import './index.css';
import configureStore from './store';
import * as postActions from './actions/postActions';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import posts from './data';

const store = configureStore();
store.dispatch(postActions.loadPosts(posts));

render(
  <App store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
