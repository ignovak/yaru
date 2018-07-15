import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import posts from './data';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App posts={posts}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
