import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';

import App from './components/App.jsx';
import Voting from './components/Voting.jsx';
import Results from './components/Results.jsx';

const pair = ['Trainspotting', '28 Days Later'];

const routes = (
  <Route component={App}>
    <Route path="/" component={Voting} />
    <Route path="/results" component={Results} />
  </Route>
);


ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);