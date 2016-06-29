import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';
import TeamContainer from '../containers/TeamContainer';
import RecruitmentContainer from '../containers/RecruitmentContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='team' component={TeamContainer} />
      <Route path='recruitment' component={RecruitmentContainer} />
    </Route>
  </Router>
);

export default routes;
