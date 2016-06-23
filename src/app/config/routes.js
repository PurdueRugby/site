import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainContainer from '../components/MainContainer';
import Home from '../components/Home';
import TeamContainer from '../containers/TeamContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='team' component={TeamContainer} />
    </Route>
  </Router>
);

export default routes;
