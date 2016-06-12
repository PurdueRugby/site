import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home/Home';
import App from './app/App';
import Donate from './donate/Donate';
import Team from './team/Team';
import Roster from './team/Roster';
import Recruiting from './team/Recruiting';
import News from './news/News';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
        <Route path='donate' component={Donate} />
        <Route path='team' component={Team}>
          <Route path='roster' component={Roster} />
          <Route path='recruitment' component={Recruiting} />
        </Route>
        <Route path='news' component={News} />
    </Route>
  </Router>
);

export default routes;
