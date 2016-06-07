import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app/App';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      {/* <IndexRoute component={Home} />
        <Route path='donate' component={Donate} />
        <Route path='team' component={Team} />
        <Route path='news' component={News} />*/}
    </Route>
  </Router>
);

export default routes;
