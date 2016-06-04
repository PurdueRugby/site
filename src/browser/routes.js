import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import App from './app/App'


const routes = (
  <Router>
    <Route path='/' component={App}>
    </Route>
  </Router>
);

export default routes;
