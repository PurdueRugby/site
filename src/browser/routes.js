import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './app/App'


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
);

export default routes;
