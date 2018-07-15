import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from '../containers/ErrorPage';
import HomePage from '../containers/HomePage';
import PostPage from '../containers/PostPage';

import 'bootstrap/dist/css/bootstrap.css';

const App = ({ store }) => (
  <div className="container">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/posts/:id' component={PostPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  </div>
);

export default App;
